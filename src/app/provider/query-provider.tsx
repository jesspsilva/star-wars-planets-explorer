"use client";

import { createSyncStoragePersister } from "@tanstack/query-sync-storage-persister";
import { QueryClientProvider } from "@tanstack/react-query";
import { PersistQueryClientProvider } from "@tanstack/react-query-persist-client";

import { createQueryClient } from "@/app/lib/query-client";

type QueryProviderProps = {
  children: React.ReactNode;
};

export default function QueryProvider({ children }: QueryProviderProps) {
  const queryClient = createQueryClient();

  const persister =
    typeof window !== "undefined"
      ? createSyncStoragePersister({
          storage: window.localStorage,
          key: "PLANET_CACHE",
          throttleTime: 1000,
          serialize: (data) => JSON.stringify(data),
          deserialize: (data) => JSON.parse(data),
        })
      : undefined;

  const onPersisterSuccess = () => {
    queryClient.resumePausedMutations();
  };

  return persister ? (
    <QueryClientProvider client={queryClient}>
      <PersistQueryClientProvider
        client={queryClient}
        persistOptions={{ persister }}
        onSuccess={onPersisterSuccess}
      >
        {children}
      </PersistQueryClientProvider>
    </QueryClientProvider>
  ) : (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
}
