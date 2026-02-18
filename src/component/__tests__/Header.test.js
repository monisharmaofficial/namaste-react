import { fireEvent,render, screen } from "@testing-library/react";
import Header from "../Header";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

it("should load the header component with the login button", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>,
  );
  const LoginButton = screen.getByRole("button", { name: "Login" });
    // const LoginButton = screen.getByText("Login");  
    expect(LoginButton).toBeInTheDocument();
});

it("should load the header component with the cart item 0", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>,
  );
 
  const cartItem = screen.getByText("Cart - (0 items)");
  expect(cartItem).toBeInTheDocument();
});

it("should load the header component with the cart item ", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>,
  );
 
  //this is a regex and it will match any text that starts with cart and it will ignore the number of items in the cart
  const cartItem = screen.getByText(/Cart/);
  expect(cartItem).toBeInTheDocument();
});

it("should Change login button to logout on click", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>,
);
 
const LoginButton = screen.getByRole("button", { name: "Login" });
fireEvent.click(LoginButton);
const LogOutButton = screen.getByRole("button", { name: "Logout" });
expect(LogOutButton).toBeInTheDocument();

});
