import { render,screen } from "@testing-library/react";
import ContactUs from "../ContactUs";
import "@testing-library/jest-dom"


test("should be input in contact page", () => {
    render(<ContactUs />);

    const inputPlaceholder = screen.getByPlaceholderText("you@example.com");

    // expect(input).toBeInTheDocument();
    //assertion 
    expect(inputPlaceholder).toBeInTheDocument();
})