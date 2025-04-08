import { TestingLibraryMatchers } from "@testing-library/jest-dom/matchers";
// eslint-disable-next-line
import { Matchers, AsymmetricMatchers } from "bun:test";

declare module "bun:test" {
  // eslint-disable-next-line
  interface Matchers<T>
    extends TestingLibraryMatchers<typeof expect.stringContaining, T> {}
  // eslint-disable-next-line
  interface AsymmetricMatchers extends TestingLibraryMatchers<any, any> {}
}
