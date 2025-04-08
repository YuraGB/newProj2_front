import { test, expect } from "bun:test";
import { screen, render } from "@testing-library/react";
import HomePage from "@/pages/HomePage";
import { QueryProvider } from "@/lib/reactQuery.tsx";

test("Can use Testing Library", () => {
  render(
    <QueryProvider>
      <HomePage />
    </QueryProvider>,
  );
  // @ts-expect-error the IDE doesn't see toBeInTheDocument
  expect(screen.getByText("Home page")).toBeInTheDocument();
});
