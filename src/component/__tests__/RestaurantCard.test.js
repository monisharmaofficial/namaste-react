import RestaurantCard, { availabilityCheck } from "../RestaurantCard";
import MOCK_DATA from "../mocks/resCardMock.json";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

it("should render RestaurantCard component with propes", () => {
    render(<RestaurantCard swiggyData={MOCK_DATA} />); 

    const name = screen.getByText("Rewari Sweets");
    expect(name).toBeInTheDocument();
});

it("should render Open label when wrapped with availabilityCheck HOC", () => {
    const RestaurantCardOpen = availabilityCheck(RestaurantCard);

    render(<RestaurantCardOpen swiggyData={MOCK_DATA} />);

    const openLabel = screen.getByText("Open");
    expect(openLabel).toBeInTheDocument();
});
