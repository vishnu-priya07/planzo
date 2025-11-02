import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders PlanZo header", () => {
  render(<App />); // no BrowserRouter here

  const logoElement = screen.getByText(/PlanZo/i);
  expect(logoElement).toBeInTheDocument();
});

test("renders Home page content", () => {
  render(<App />);

  const welcomeElement = screen.getByText(/Welcome to/i);
  expect(welcomeElement).toBeInTheDocument();
});

test("renders navigation links", () => {
  render(<App />);

  const homeLink = screen.getByText(/Home/i);
  const aboutLink = screen.getByText(/About/i);
  const contactLink = screen.getByText(/Contact/i);
  const eventsLink = screen.getByText(/Events/i);
  const loginLink = screen.getByText(/Login/i);

  expect(homeLink).toBeInTheDocument();
  expect(aboutLink).toBeInTheDocument();
  expect(contactLink).toBeInTheDocument();
  expect(eventsLink).toBeInTheDocument();
  expect(loginLink).toBeInTheDocument();
});