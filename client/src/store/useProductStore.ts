import { create } from 'zustand';
import axios from 'axios';
import toast from 'react-hot-toast';

import type { Product } from '../types';
import type { FormEvent } from 'react';

const BASE_URL = "http://localhost:5200";

interface FormData {
    name: string,
    price: number,
    image: string,
    category: string,
}

interface ProductState {
    products: Product[],
    loading: boolean,
    error: any,

    formData: FormData
    setFormData: (formData: FormData) => void,
    resetFormData: () => void,

    fetchProducts: () => void,
    deleteProduct: (id: number) => void,
    // editProduct: (id: number) => void,
    addProduct: (event: FormEvent) => void,

}

export const useProductStore = create<ProductState>((set, get) => ({
    products: [],
    loading: false,
    error: null,

    formData: {
        name: "",
        price: 0.00,
        image: "",
        category: ""
    },

    setFormData: (formData) => set({ formData }),
    resetFormData: () => set({ formData: { name: "", price: 0.00, image: "", category: "" } }),


    fetchProducts: async () => {
        set({ loading: true });
        try {
            const response = await axios.get(`${BASE_URL}/api/products`);
            set({ products: response.data.data, error: null });

        } catch (err: unknown) {

            if (axios.isAxiosError(err)) {
                if (err.response?.status === 429) set({ error: "Rate limit exceeded" });
                else set({ error: "Something went wrong" });
            }

        } finally {
            set({ loading: false })
        }
    },

    addProduct: async (event) => {
        event.preventDefault();
        set({ loading: true});

        try {
            const {formData} = get();
            await axios.post(`${BASE_URL}/api/products`, formData);
            get().fetchProducts();
            get().resetFormData();
            toast.success("Product added successfully!!!!")
        } catch (error) {
            console.log("Error in adding product", error);
            toast.error("Something went wrong");
        } finally {
            set({ loading: false})
        }
    },

    deleteProduct: async (id) => {
        set({ loading: true });
        try {
            await axios.delete(`${BASE_URL}/api/products/${id}`);
            set(prev => ({ products: prev.products.filter(p => p.id !== id) }));
            toast.success("Product deleted successfully!!!");

        } catch (error) {
            console.log("Error in deletion process", error);
            toast.error("Something wrong happened :(")
        } finally {
            set({ loading: false })
        }
    },

    // editProduct: async (id) => {
    // }
}))