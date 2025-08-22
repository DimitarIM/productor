import { render, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Header from "../components/Header";

jest.mock("../components/CategoriesLink", () => ({
  __esModule: true,
  default: ({ children }: any) => <div data-testid="categories-link">{children}</div>,
}));

jest.mock("../components/CategoriesAdd", () => ({
  __esModule: true,
  default: () => <div data-testid="categories-add">Add Category Modal</div>,
}));

jest.mock("lucide-react", () => ({
  CirclePlus: (props: any) => <svg data-testid="circle-plus" {...props}></svg>,
  ShoppingCart: (props: any) => <svg data-testid="shopping-cart" {...props}></svg>,
}));

jest.mock("../store/useCategoryStore", () => ({
  useCategoryStore: () => ({
    categories: ["Category1", "Category2"],
  }),
}));

jest.mock("react-router", () => ({
  ...jest.requireActual("react-router"),
  useLocation: () => ({ pathname: "/" }),
}));

describe(Header, () => {
  const renderTheHeader = () =>
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    );

  it("renders the logo and site name", () => {
    renderTheHeader();
    expect(screen.getByRole("img")).toBeInTheDocument();
    expect(screen.getByText("Productor")).toBeInTheDocument();
  });

  it("renders the categories link on home page", () => {
    renderTheHeader();
    expect(screen.getByTestId("categories-link")).toBeInTheDocument();
  });

  it("renders the shopping cart icon", () => {
    renderTheHeader();
    expect(screen.getByTestId("shopping-cart")).toBeInTheDocument();
  });

  it("toggles CategoriesAdd modal on CirclePlus click", () => {
    renderTheHeader();
    const button = screen.getByTestId("circle-plus").closest("button")!;

    expect(screen.queryByTestId("categories-add")).not.toBeInTheDocument();

    fireEvent.click(button);
    expect(screen.getByTestId("categories-add")).toBeInTheDocument();

    fireEvent.click(button);
    expect(screen.queryByTestId("categories-add")).not.toBeInTheDocument();
  });
});