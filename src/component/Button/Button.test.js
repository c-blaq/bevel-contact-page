import { render, cleanup } from "@testing-library/react";
import Button from "./Button";

it("render button without crashing", () => {
  render(<Button text="Contact me" />);
});

it("render button correctly", () => {
  const { getByTestId } = render(<Button text="Contact me" />);
  expect(getByTestId("button")).toHaveTextContent("Contact me");
});

it("button should be disabled on page load", () => {
  const { getByTestId } = render(<Button disabled={true} />);
  expect(getByTestId("button")).toBeDisabled();
});
