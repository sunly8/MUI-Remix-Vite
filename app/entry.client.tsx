import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import { RemixBrowser } from '@remix-run/react';
import { CacheProvider } from '@emotion/react';
import { CssBaseline } from '@mui/material';
import ClientStyleContext from './src/ClientStyleContext';
import createEmotionCache from './src/createEmotionCache';

interface ClientCacheProviderProps {
  children: React.ReactNode;
}

function ClientCacheProvider({ children }: ClientCacheProviderProps) {
  const [cache, setCache] = React.useState(createEmotionCache());

  const clientStyleContextValue = React.useMemo(
    () => ({
      reset() {
        setCache(createEmotionCache());
      },
    }),
    [],
  );

  return (
    <ClientStyleContext.Provider value={clientStyleContextValue}>
      <CacheProvider value={cache}>
        <CssBaseline />
        {children}
      </CacheProvider>
    </ClientStyleContext.Provider>
  );
}

function hydrate() {
  React.startTransition(() => {
    ReactDOM.hydrateRoot(
      document,
      <React.StrictMode>
        <ClientCacheProvider>
          <RemixBrowser />
        </ClientCacheProvider>
      </React.StrictMode>
    );
  });
}

if (window.requestIdleCallback) {
  window.requestIdleCallback(hydrate);
} else {
  // Safari doesn't support requestIdleCallback
  // https://caniuse.com/requestidlecallback
  setTimeout(hydrate, 1);
}
