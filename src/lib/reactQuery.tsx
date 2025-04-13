import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactNode } from "react";

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      refetchOnReconnect: false,
      retry: false,
    },
  },
});

export const QueryProvider = ({
  children,
}: {
  children: ReactNode;
}): ReactNode => (
  <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
);
