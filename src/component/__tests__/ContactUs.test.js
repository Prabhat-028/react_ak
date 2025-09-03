import ContactUs from "../ContactUs";
import { render, screen } from "@testing-library/react"
import "@testing-library/jest-dom";

test("there should be place holder of Your Name", () => {
    render(< ContactUs />);

    const placeHolder = screen.getByPlaceholderText("Your name");

    expect(placeHolder).toBeInTheDocument();
    

})     