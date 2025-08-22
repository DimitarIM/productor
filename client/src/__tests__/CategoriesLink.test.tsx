import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import CategoriesLink from "../components/CategoriesLink";

describe(CategoriesLink, () => {
    it("renders children properly", () => {
        render(<CategoriesLink CategoriesPopup={<div>Content</div>}>
            Child
        </CategoriesLink>)

        expect(screen.getByText("Child")).toBeInTheDocument();
    })

    it("activates the modal hover and hides it on mouse leave", async () => {
        const mouse = userEvent.setup();

        render(
            <CategoriesLink CategoriesPopup={<div>Modal</div>}>
                Hoverable Content
            </CategoriesLink>
        )

        const parent = screen.getByText("Hoverable Content").parentElement!;

        expect(screen.queryByText("Modal")).not.toBeInTheDocument;

        await mouse.hover(parent);
        expect(screen.getByText("Modal")).toBeInTheDocument();

        await mouse.unhover(parent);
        expect(screen.queryByText("Modal")).not.toBeInTheDocument();
    })
})