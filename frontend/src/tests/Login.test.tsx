import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it, test } from "vitest";
import Login from "../app/routes/auth/login";
import { HashRouter } from "react-router";
import userEvent from "@testing-library/user-event";
import { user } from "@nextui-org/react";

describe("Login", () => {
  it("renders Login screen with form", () => {
    <HashRouter>
      render(
      <Login />)
    </HashRouter>;

    screen.debug();
  });
});

test("invalid email", async () => {
  const user = userEvent.setup();
  render(
    <HashRouter>
      <Login />
    </HashRouter>,
  );
  const input = screen.getByPlaceholderText("Enter your email");

  await userEvent.type(input, "1234");
  await user.click(screen.getByRole("button", { name: /log in/i }));
  console.log(screen.debug());
  expect(screen.getByText(/please enter a valid email/i)).toBeInTheDocument();
});

test("password empty", async () => {
  const user = userEvent.setup();

  render(
    <HashRouter>
      <Login />
    </HashRouter>,
  );

  await user.click(screen.getByRole("button", { name: /log in/i }));
  expect(screen.getByText(/please enter a password/i)).toBeInTheDocument();
});
