import { render, screen } from "@testing-library/react";
import ProductGrid from "../components/ProductGrid";
import type { Product } from "../types";

jest.mock("../components/ProductCard", () => ({
    __esModule: true,
    default: ({ name }: { name: string }) => <div data-testid="product-card">{name}</div>
}))

const mockProducts: Product[] = [
    { id: 1, name: "Product1", price: 20.00, image: "image1", category: "category1" },
    { id: 2, name: "Product2", price: 21.00, image: "image2", category: "category2" },
    { id: 3, name: "Product3", price: 22.00, image: "image3", category: "category3" },
    { id: 4, name: "Product4", price: 23.00, image: "image4", category: "category4" },
]

describe(ProductGrid, () => {
    it("renders products properly", () => {
        render(<ProductGrid products={mockProducts} />);
        const cards = screen.getAllByTestId("product-card");
        cards.forEach((card) => {
            expect(card).toBeInTheDocument();
        })
    })

    it("has right number of products", () => {
        render(<ProductGrid products={mockProducts} />);
        expect(screen.getAllByTestId("product-card")).toHaveLength(mockProducts.length)
    })
    it("has proper naming for products", () => {
        render(<ProductGrid products={mockProducts} />);
        mockProducts.forEach((p) => {
            expect(screen.getByText(p.name)).toBeInTheDocument();
        })
    });
})