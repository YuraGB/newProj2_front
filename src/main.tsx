import { lazy, StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";
import "./index.css";
import Routing from "./modules/routing/Routing.tsx";
import { QueryProvider } from "./lib/reactQuery.tsx";
import ErrorBoundary from "@/components/errorWrapper/errorBoundary.tsx";
const Toaster = lazy(() => import("@/components/ui/sonner.tsx"));

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ErrorBoundary>
      <BrowserRouter>
        <QueryProvider>
          <Routing />
          <Suspense fallback={null}>
            <Toaster richColors={true} />
          </Suspense>
        </QueryProvider>
      </BrowserRouter>
    </ErrorBoundary>
  </StrictMode>,
);
