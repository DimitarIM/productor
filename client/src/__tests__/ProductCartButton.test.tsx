import { render, screen } from "@testing-library/react";
import ProductCartButton from "../components/ProductCartButton";

describe(ProductCartButton, ()=> {
    it("renders properly", ()=> {
        render(<ProductCartButton />);
        const button = screen.getByRole("button");
        expect(button).toBeInTheDocument();
        expect(button.textContent).toBe("Add to cart");
    })
})