import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";
import "./index.css";
import Routing from "./modules/routing/Routing.tsx";
import { QueryProvider } from "./lib/reactQuery.tsx";
import { Toaster } from "@/components/ui/sonner.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <QueryProvider>
        <Routing />
        <Toaster richColors={true} />
      </QueryProvider>
    </BrowserRouter>
  </StrictMode>,
);
