import { lazy, StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import router from "./modules/routing/Routing.tsx";
import { QueryProvider } from "./lib/reactQuery.tsx";
import ErrorBoundary from "@/components/errorWrapper/errorBoundary.tsx";
import { SkeletonPage } from "@/pages/SkeletonPage.tsx";
import { RouterProvider } from "react-router/dom";
const Toaster = lazy(() => import("@/components/ui/sonner.tsx"));

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ErrorBoundary>
      <QueryProvider>
        <Suspense fallback={<SkeletonPage />}>
          <RouterProvider router={router} />
        </Suspense>
        <Suspense fallback={null}>
          <Toaster richColors={true} />
        </Suspense>
      </QueryProvider>
    </ErrorBoundary>
  </StrictMode>,
);
