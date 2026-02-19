import Contact from "../Contact";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

describe("Contact Us Page test cases", () => {
    //describe is just to group all the test cases related to contact us page and it takes two arguments first is string and second is a callback function and test word can be written as it both are same.

    // beforeAll(()=>{
    //     console.log("before all test cases");
    // })

    // beforeEach(()=>{
    //     console.log("before each test case");
    // })

    // afterAll(()=>{
    //     console.log("after all test cases");
    // } )

    // afterEach(()=>{
    //     console.log("after each test case");
    // })  

  test("should load the contact component", () => {
    //rendering the component
    render(<Contact />);

    //querying
    const heading = screen.getByRole("heading");

    //assertion
    expect(heading).toBeInTheDocument();
  });

  it("should load button in contact component", () => {
    render(<Contact />);
    // const button = screen.getByRole("button");
    const button = screen.getByText("Send Message");
    expect(button).toBeInTheDocument();
  });

  test("should load name input in contact component", () => {
    render(<Contact />);

    const nameInput = screen.getByPlaceholderText("John Doe");
    expect(nameInput).toBeInTheDocument();
  });

  test("should load 2 input in contact component", () => {
    render(<Contact />);
    const inputElements = screen.getAllByRole("textbox");
    // console.log(inputElements.length);
    expect(inputElements.length).toBe(4);
    expect(inputElements.length).not.toBe(5);
  });
});
