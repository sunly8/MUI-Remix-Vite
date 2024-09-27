import { json, Outlet, useLoaderData } from '@remix-run/react';
// import { ThemeProvider } from '@emotion/react';
import { CssBaseline, useMediaQuery, useTheme } from '@mui/material';
import { Document } from './src/Document';
import { ErrorBoundary } from './src/ErrorBoundary';
import { LoaderFunctionArgs } from '@remix-run/node';
import { ThemeProvider, useColorMode } from './src/Theme';


export interface RootOutletContext {
  user: { avatar: string, mobile: string, name: string, openId: boolean, password: boolean, signature: string, username: string, roles: string[] };
  setSnk: (data: { success: boolean, message?: any }) => void;
};

export const loader = async ({ request }: LoaderFunctionArgs) => {
  return json({ user: null });
}
export default function App() {
  const { user } = useLoaderData<typeof loader>();

  return (
    <ThemeProvider >
      <Document>
        <CssBaseline />
        <Outlet context={{ user }} />
      </Document>
    </ThemeProvider>
  );
}
export { ErrorBoundary };