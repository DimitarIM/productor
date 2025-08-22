import { render, screen, fireEvent } from "@testing-library/react";
import ProductAddPopUp from "../components/ProductAddPopUp";

jest.mock("lucide-react", () => ({
  DollarSignIcon: (props: any) => <svg data-testid="dollar-icon" {...props} />,
  ImageIcon: (props: any) => <svg data-testid="image-icon" {...props} />,
  Package2Icon: (props: any) => <svg data-testid="package-icon" {...props} />,
  PlusCircleIcon: (props: any) => <svg data-testid="plus-icon" {...props} />,
  TagIcon: (props: any) => <svg data-testid="tag-icon" {...props} />,
}));

const mockAddProduct = jest.fn((e) => e.preventDefault());
const mockSetFormData = jest.fn();
const mockResetFormData = jest.fn();
const mockFormData = {
  name: "Bogdan",
  price: 25.65,
  image: "image",
  category: "category",
};
const mockLoading = false;

jest.mock("../store/useProductStore", () => ({
  useProductStore: () => ({
    addProduct: mockAddProduct,
    setFormData: mockSetFormData,
    resetFormData: mockResetFormData,
    formData: mockFormData,
    loading: mockLoading,
  }),
}));

describe("ProductAddPopUp", () => {
  let modalRoot: HTMLDivElement;

  beforeEach(() => {
    modalRoot = document.createElement("div");
    modalRoot.setAttribute("id", "modal-root");
    document.body.appendChild(modalRoot);
  });

  afterEach(() => {
    document.body.removeChild(modalRoot);
    jest.clearAllMocks();
  });

  it("renders properly", () => {
    render(<ProductAddPopUp setModal={jest.fn()} />);
    
    expect(screen.getByText("Add New Product")).toBeInTheDocument();

    expect(screen.getByPlaceholderText("Enter product name")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("0.00")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("https://example.com/image.jpg")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Enter product category")).toBeInTheDocument();

    expect(screen.getByTestId("package-icon")).toBeInTheDocument();
    expect(screen.getByTestId("dollar-icon")).toBeInTheDocument();
    expect(screen.getByTestId("image-icon")).toBeInTheDocument();
    expect(screen.getByTestId("tag-icon")).toBeInTheDocument();
    expect(screen.getByTestId("product-button")).toBeInTheDocument();
  });

  it("calls setModal(false) when the close button is clicked", () => {
    const setModalMock = jest.fn();
    render(<ProductAddPopUp setModal={setModalMock} />);
    
    const closeBtn = screen.getAllByText("X")[0];
    fireEvent.click(closeBtn);
    
    expect(setModalMock).toHaveBeenCalledWith(false);
  });

  it("calls resetFormData when the Reset button is clicked", () => {
    render(<ProductAddPopUp setModal={jest.fn()} />);
    const resetBtn = screen.getByText("Reset");
    fireEvent.click(resetBtn);
    expect(mockResetFormData).toHaveBeenCalled();
  });

  it("calls addProduct on form submit", () => {
    render(<ProductAddPopUp setModal={jest.fn()} />);
    const form = screen.getByTestId("product-button");
    fireEvent.submit(form);
    expect(mockAddProduct).toHaveBeenCalled();
  });

  it("updates form data when typing in inputs", () => {
    render(<ProductAddPopUp setModal={jest.fn()} />);
    
    const nameInput = screen.getByPlaceholderText("Enter product name");
    fireEvent.change(nameInput, { target: { value: "Test Product" } });
    expect(mockSetFormData).toHaveBeenCalledWith({ ...mockFormData, name: "Test Product" });

    const priceInput = screen.getByPlaceholderText("0.00");
    fireEvent.change(priceInput, { target: { value: "12.34" } });
    expect(mockSetFormData).toHaveBeenCalledWith({ ...mockFormData, price: 12.34 });
  });
});