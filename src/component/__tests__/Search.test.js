import { fireEvent, render, screen } from "@testing-library/react";
import Body from "../Body";
import MOCK_DATA from "../mocks/mockResListData.json";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

// mock online status
jest.mock("../../utils/useOnlineStatus", () => {
  return () => true;
});

// mock fetch
global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve(MOCK_DATA),
  })
);

it("should Search Restaurant List for Pizza", async () => {

  render(
    <BrowserRouter>
      <Body />
    </BrowserRouter>
  );

  const cardsBeforeSearch = await screen.findAllByTestId("restaurant-card");

  expect(cardsBeforeSearch.length).toBe(8);

  const searchBtn = await screen.findByRole("button", { name: "Search" });

  const searchInput = screen.getByTestId("search-input");

  fireEvent.change(searchInput, { target: { value: "Pizza" } });

  fireEvent.click(searchBtn);

  const cardsAfterSearch = await screen.findAllByTestId("restaurant-card");

  expect(cardsAfterSearch.length).toBe(2);
});


it("should filter Restaurant List for Top Rated Restaurants", async () => {
    render(
        <BrowserRouter>
        <Body />
        </BrowserRouter>
    )

    const cardsBeforeFilter = await screen.findAllByTestId("restaurant-card");

    expect(cardsBeforeFilter.length).toBe(8);

    const filterBtn = await screen.findByRole("button", { name: "Top Rated Restaurants" });

    fireEvent.click(filterBtn);

    const cardsAfterFilter = await screen.findAllByTestId("restaurant-card");

    expect(cardsAfterFilter.length).toBe(8);    
});