import { isRouteErrorResponse, useRouteError } from "@remix-run/react";
import { Document } from "./Document";
import ProTip from "~/src/ProTip";
import Copyright from "~/src/Copyright";
import { Box, Container } from "@mui/material";
import { useEffect, useState } from "react";
import { ThemeProvider } from "./Theme";

export function ErrorBoundary() {
  const error = useRouteError();
  const [info, setInfo] = useState({ title: '', message: '' });
  useEffect(() => {
    if (isRouteErrorResponse(error)) {
      const message = error.status === 401 ?
        'Oops! 您尝试访问一个您无权访问的页面。'
        : error.status === 404 ? 'Oops! 飞那去了？'
          : error.status === 500 ? 'Oops! 工程师去火星了还没回来。'
            : `${error.data || error.statusText}`;
      setInfo({ title: `${error.status} ${error.statusText}`, message });
      console.error(error);
    } else if (error instanceof Error) {
      setInfo({ title: 'Error', message: error.message });
    } else {
      setInfo({ title: 'Error', message: '未知错误' });
    }
  }, [error]);

  return (
    <Document title={info.title}>
      <ThemeProvider>
        <Container maxWidth="sm">
          <Box sx={{ my: 4 }}>
            <h1>{info.title}</h1>
            <p>{info.message}</p>
            <ProTip />
            <Copyright />
          </Box>
        </Container>
      </ThemeProvider>
    </Document>
  );
}



