import { render, screen } from "@testing-library/react";
import Contact from "./Contact";

it("renders contact page without crashing", () => {
  render(<Contact />);
});
