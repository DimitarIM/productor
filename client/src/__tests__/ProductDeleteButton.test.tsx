import { fireEvent, render, screen } from "@testing-library/react";
import ProductDeleteButton from "../components/ProductDeleteButton";

jest.mock("lucide-react", () => ({
    DeleteIcon: () => <svg data-testid="delete-icon" />,
}));

const mockDeleteFunc = jest.fn();
const mockId = 1;

describe(ProductDeleteButton, () => {
    it("renders properly", () => {
        render(<ProductDeleteButton id={mockId} deleteFunc={mockDeleteFunc} />);
        const button = screen.getByRole("button");
        
        expect(button).toBeInTheDocument();
        expect(screen.getByTestId("delete-icon")).toBeInTheDocument();
    });

    it("it calls the delete function", () => {
        render(<ProductDeleteButton id={mockId} deleteFunc={mockDeleteFunc} />);
        const button = screen.getByRole("button");
        fireEvent.click(button);

        expect(mockDeleteFunc).toHaveBeenCalledTimes(1);
        expect(mockDeleteFunc).toHaveBeenCalledWith(mockId);
    })
})