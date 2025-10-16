import { fireEvent, render, screen } from "@testing-library/react";
import ProductCard from "../components/ProductCard";

jest.mock("../components/ProductCartButton", () => ({
    default: () => <div data-testid="cart-btn">Cart Button</div>
}))
jest.mock("../components/ProductDeleteButton", () => ({
    default: () => <div data-testid="delete-btn">Delete Button</div>
}))
jest.mock("../components/ProductEditButton", () => ({
    default: () => <div data-testid="edit-btn">Edit Button</div>
}))

const mockProduct = {
    id: 1,
    name: "Bogdan",
    price: 69.96,
    image: "image",
    category: "category",
};

describe(ProductCard, () => {
    it("renders properly", () => {
        render(<ProductCard {...mockProduct} />);

        expect((screen.getByRole("img", { hidden: true }) as HTMLImageElement).src).toContain(mockProduct.image)

        expect(screen.getByText(mockProduct.name)).toBeInTheDocument();
        expect(screen.getByText(mockProduct.category)).toBeInTheDocument();
        expect(screen.getByText(`€${mockProduct.price}`)).toBeInTheDocument();
    })

    it("shows buttons on mouse over", () => {
        render(<ProductCard {...mockProduct} />);
        const figure = screen.getByTestId("card-figure");

        fireEvent.mouseOver(figure);

        expect(screen.getByTestId("cart-btn")).toBeInTheDocument();
        expect(screen.getByTestId("delete-btn")).toBeInTheDocument();
        expect(screen.getByTestId("edit-btn")).toBeInTheDocument();

        fireEvent.mouseLeave(figure);

        expect(screen.queryByTestId("cart-btn")).not.toBeInTheDocument();
        expect(screen.queryByTestId("delete-btn")).not.toBeInTheDocument();
        expect(screen.queryByTestId("edit-btn")).not.toBeInTheDocument();

    })
})