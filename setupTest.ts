import { expect } from "bun:test";

import * as matchers from "@testing-library/jest-dom/matchers";

// eslint-disable-next-line
expect.extend(matchers as any);
