import { render, screen, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

import appStore from "../../utils/appStore";
import Header from "../Header";
import RestaurantMenu from "../RestaurantMenu";
import Cart from "../Cart";

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () =>
      Promise.resolve({
        data: {
          cards: [
            {},
            {},
            {},
            {},
            {
              card: {
                card: {
                  gridElements: {
                    infoWithStyle: {
                      restaurants: [
                        {
                          info: {
                            id: "1",
                            name: "Pizza Hut",
                            cuisines: ["Pizza"],
                            locality: "Noida",
                            areaName: "Sector 18",
                            avgRating: "4.2",
                            sla: { deliveryTime: 30 },
                            costForTwo: "₹300 for two",
                            availability: { opened: true },
                            cloudinaryImageId: "abc",
                          },
                        },
                      ],
                    },
                  },
                },
              },
            },
          ],
        },
      }),
  })
);

it("should update cart count when Add+ is clicked", async () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
        <RestaurantMenu />
      </Provider>
    </BrowserRouter>
  );

  // Initially cart should be 0
  expect(screen.getByText(/Cart - \(0 items\)/i)).toBeInTheDocument();

  // Wait a little for fetch to complete
  const addButton = await screen.findByText("Add+");

  // Click Add+
  fireEvent.click(addButton);

  // Now cart should become 1
  expect(screen.getByText(/Cart - \(1 items\)/i)).toBeInTheDocument();
  
});
