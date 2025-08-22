import { render, screen } from "@testing-library/react";
import Footer from "../components/Footer";

jest.mock("lucide-react", () => ({
    CopyrightIcon: () => <svg data-testid="copyright-icon" />
}))

describe("Footer Component Testing", () => {
    it("rendering the footer text", () => {
        render(<Footer />);
        expect(screen.getByText(/DimIm Enterprises/i)).toBeInTheDocument();
    })

    it("Rendering Copyright Icon", () => {
        render(<Footer />);
        expect(screen.getByTestId("copyright-icon")).toBeInTheDocument();
    })

})