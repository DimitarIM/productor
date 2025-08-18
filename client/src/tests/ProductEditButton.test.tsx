import { render, screen } from "@testing-library/react";
import ProductEditButton from "../components/ProductEditButton";
import { MemoryRouter } from "react-router";

jest.mock("lucide-react", () => ({
    EditIcon: () => <svg data-testid="edit-icon" />,
}));

describe(ProductEditButton, () => {
    it("renders properly", () => {
        render(
            <MemoryRouter>
                <ProductEditButton id={1} />
            </MemoryRouter>
        );
        const button = screen.getByRole("button");
        expect(button).toBeInTheDocument();
        expect(screen.getByTestId("edit-icon")).toBeInTheDocument();
    });

    it("has correct link", () => {
        render(
            <MemoryRouter>
                <ProductEditButton id={1} />
            </MemoryRouter>
        );
        expect(screen.getByRole("link")).toHaveAttribute("href", "/product/1");
    })
})