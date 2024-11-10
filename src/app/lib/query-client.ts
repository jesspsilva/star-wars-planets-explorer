import { QueryClient } from "@tanstack/react-query";

export function createQueryClient() {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        gcTime: 1000 * 60 * 60 * 24, // Cache data for 24 hours after last access
        staleTime: 1000 * 60 * 60 * 24, // Cache for 24 hours before refetching
        retry: 2,
        refetchOnWindowFocus: false,
        networkMode: "offlineFirst",
      },
    },
  });

  return queryClient;
}
