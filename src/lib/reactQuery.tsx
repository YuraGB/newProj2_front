import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactNode } from "react";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      refetchOnReconnect: false,
      retry: false,
      staleTime: 0,
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
