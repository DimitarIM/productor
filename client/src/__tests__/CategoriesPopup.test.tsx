import { render, screen } from "@testing-library/react";
import CategoriesPopup from "../components/CategoriesPopup";
import type { Category } from "../types";

const mockCategories: Category[] = [
    {
        name: "Category1"
    },
    {
        name: "Category2"
    },
    {
        name: "Category3"
    },
]

describe(CategoriesPopup, () => {
    it("renders categories properly", () => {
        render(<CategoriesPopup categories={mockCategories} />);
        expect(screen.getAllByTestId("category-tab")[0]).toBeInTheDocument();
    })

    it("renders categories with correct length", () => {
        render(<CategoriesPopup categories={mockCategories} />);
        expect(screen.getAllByTestId("category-tab")).toHaveLength(mockCategories.length);
    })

    it("displays the right names", () => {
        render(<CategoriesPopup categories={mockCategories} />);
        mockCategories.forEach((category) => {
            expect(screen.getByText(category.name)).toBeInTheDocument();
        })
    })
})