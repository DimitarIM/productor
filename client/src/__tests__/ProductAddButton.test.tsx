import { fireEvent, render, screen } from "@testing-library/react";
import ProductAddButton from "../components/ProductAddButton";

jest.mock("lucide-react", () => ({
    PackagePlusIcon: () => <svg data-testid="package-icon" />,
}));

jest.mock("../components/ProductAddPopUp", () => ({
  __esModule: true,
  default: () => <div data-testid="product-add-popup">Product Creation Popup</div>,
}));

describe(ProductAddButton, () => {
    it("renders button properly", () => {
        render(<ProductAddButton />);

        const button = screen.getByRole("button");
        expect(button).toBeInTheDocument();
        expect(screen.getByTestId("package-icon")).toBeInTheDocument();
        expect(button).toHaveTextContent("Add");
    });

    it("activates popup on button click", () => {
        render(<ProductAddButton />);
        const button = screen.getByRole("button");
        expect(screen.queryByTestId("product-add-popup")).not.toBeInTheDocument();

        fireEvent.click(button);
        expect(screen.getByTestId("product-add-popup")).toBeInTheDocument();
    })
})