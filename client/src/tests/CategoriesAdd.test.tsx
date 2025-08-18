import { fireEvent, render, screen } from "@testing-library/react";
import CategoriesAdd from "../components/CategoriesAdd";

jest.mock("lucide-react", () => ({
    TagIcon: () => <svg data-testid="tag-icon" />,
}));

const mockAddCategory = jest.fn();
const mockSetFormData = jest.fn();

jest.mock("../store/useCategoryStore", () => ({
    useCategoryStore: () => ({
        addCategory: mockAddCategory,
        setFormData: mockSetFormData,
        formData: { name: "" },
    }),
}));

describe(CategoriesAdd, () => {
    beforeEach(() => {
        jest.clearAllMocks();
    })

    it("renders properly", () => {
        render(<CategoriesAdd />);
        expect(screen.getByPlaceholderText("Add category")).toBeInTheDocument();
        expect(screen.getByTestId("tag-icon")).toBeInTheDocument();
    });

    it("calls setFormData function on changed input", () => {
        render(<CategoriesAdd />);
        const input = screen.getByPlaceholderText("Add category") as HTMLInputElement;

        fireEvent.change(input, { target: { value: "New Category" } });

        expect(mockSetFormData).toHaveBeenCalledWith({ name: "New Category" });
    });

    it("calls addCategory function on form submit", () => {
        render(<CategoriesAdd />);
        const form = screen.getByTestId("form");

        fireEvent.submit(form);

        expect(mockAddCategory).toHaveBeenCalledTimes(1);
    })
})