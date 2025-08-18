import { render, screen } from "@testing-library/react";
import CategoryTab from "../components/CategoryTab";
import type { Category } from "../types";

const mockCategory: Category = { name: "Phones" };

describe(CategoryTab, () => {
    it("renders category name", () => {
        render(<CategoryTab category={mockCategory} />);
        expect(screen.getByText(/Phones/i)).toBeInTheDocument();
    })
})