import { json, Outlet, useLoaderData } from '@remix-run/react';
import { Alert, CssBaseline, Snackbar } from '@mui/material';
import { Document } from './src/Document';
import { ErrorBoundary } from './src/ErrorBoundary';
import { LoaderFunctionArgs } from '@remix-run/node';
import { AppThemeProvider } from './src/Theme';
import { useState } from 'react';



export interface RootOutletContext {
  user: { avatar: string, mobile: string, name: string, openId: boolean, password: boolean, signature: string, username: string, roles: string[] };
  setSnk: (data: { success: boolean, message?: any }) => void;
};

export const loader = async ({ request }: LoaderFunctionArgs) => {
  return json({ user: { avatar: '/avatar/1.svg', name: 'DemoUser', signature: '' } });
}
export default function App() {
  const { user } = useLoaderData<typeof loader>();
  const [snk, setSnk] = useState<{ success: boolean, message?: string }>();

  const handleSnk = (data: { success: boolean, message?: string }) => {
    if (snk) {
      setTimeout(() => setSnk(data));
    } else {
      setSnk(data);
    }
  }

  return (
    <AppThemeProvider>
      <Document>
        <CssBaseline />
        <Outlet context={{ user, setSnk: handleSnk } as RootOutletContext} />
        {snk && <Snackbar open onClose={() => setSnk(undefined)} autoHideDuration={3000} anchorOrigin={{ vertical: 'top', horizontal: 'center' }}>
          <Alert onClose={() => setSnk(undefined)} severity={snk?.success ? 'success' : 'error'} sx={{ width: '100%' }}>
            {snk?.message}
          </Alert>
        </Snackbar>}
      </Document>
    </AppThemeProvider>
  );
}
export { ErrorBoundary };