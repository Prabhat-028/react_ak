import Header from "../Header";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import  appStore  from "../../utils/appStore";
import "@testing-library/jest-dom";

it("should be a button ", () => {
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header />
            </Provider>
        </BrowserRouter>
    );
    //querrying
    const button = screen.getByRole("button");

    //asserting
    expect(button).toBeInTheDocument();
});

it("should be a home ", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );
  //querrying
  const button = screen.getByText("Home");

  //asserting
  expect(button).toBeInTheDocument();
});

it("should be a cart ", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );
  //querrying
    const cartLink = screen.getByRole("link", { name: /cart/i });
    
    //asserting
    expect(cartLink).toBeInTheDocument();
});