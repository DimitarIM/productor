import { create } from 'zustand';
import axios from 'axios';
import type { Category } from '../types';
import toast from 'react-hot-toast';
import type { FormEvent } from 'react';

const BASE_URL = "http://localhost:5200";

interface FormData {
    name: string,
}

interface CategoryState {
    categories: Category[],
    loading: boolean,
    error: any,

    formData: FormData
    setFormData: (formData: FormData) => void,
    resetFormData: () => void,

    fetchCategories: () => void,
    deleteCategory: (id: number) => void,
    editCategory: (id: number) => void,
    addCategory: (event: FormEvent) => void,
}

export const useCategoryStore = create<CategoryState>((set, get) => ({
    categories: [],
    loading: false,
    error: null,

    formData: {
        name: "",
    },

    setFormData: (formData) => set({ formData }),
    resetFormData: () => set({ formData: { name: "" } }),


    fetchCategories: async () => {
        set({ loading: true });
        try {
            const response = await axios.get(`${BASE_URL}/api/categories`);
            set({ categories: response.data.data, error: null });

        } catch (err: unknown) {

            if (axios.isAxiosError(err)) {
                if (err.response?.status === 429) set({ error: "Rate limit exceeded" });
                else set({ error: "Something went wrong" });
            }

        } finally {
            set({ loading: false })
        }
    },
    addCategory: async (event) => {
        event.preventDefault();
        try {
            const { formData } = get();
            await axios.post(`${BASE_URL}/api/categories`, formData);
            get().fetchCategories();
            get().resetFormData();
            toast.success("Category Created!!!!");
        } catch (error) {
            console.log("Error in adding product", error);
            toast.error("Something went wrong");
        } finally {
            set({ loading: false });
        }
    },
    deleteCategory: async () => { },
    editCategory: async () => { },
}));
