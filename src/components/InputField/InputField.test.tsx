import { render, screen, fireEvent } from "@testing-library/react";
import { InputField } from "./InputField";
import "@testing-library/jest-dom"; // ✅ fix matchers

describe("InputField", () => {
  test("renders label and placeholder", () => {
    render(<InputField label="Name" placeholder="Enter name" />);
    expect(screen.getByLabelText("Name")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Enter name")).toBeInTheDocument();
  });

  test("shows error message when invalid", () => {
    render(<InputField label="Email" invalid errorMessage="Invalid email" />);
    expect(screen.getByText("Invalid email")).toBeInTheDocument();
  });

  test("toggles password visibility", () => {
    render(<InputField type="password" label="Password" />);
    const toggleBtn = screen.getByRole("button", { name: /show/i });
    fireEvent.click(toggleBtn);
    expect(screen.getByLabelText("Password")).toHaveAttribute("type", "text");
  });
});
