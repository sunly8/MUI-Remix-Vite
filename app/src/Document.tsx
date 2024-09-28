import { withEmotionCache } from "@emotion/react";
import { unstable_useEnhancedEffect, useMediaQuery, useTheme } from "@mui/material";
import { Meta, Links, ScrollRestoration, Scripts } from "@remix-run/react";
import ClientStyleContext from "~/src/ClientStyleContext";
import { useAppColorMode } from "./Theme";
import { useContext } from "react";
interface DocumentProps {
  children: React.ReactNode;
  title?: string;
}
export const Document = withEmotionCache(({ children, title }: DocumentProps, emotionCache) => {
  const clientStyleData = useContext(ClientStyleContext);

  const theme = useTheme();
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  const { toggleColorMode, manual } = useAppColorMode()
  const isSystemDarkMode = prefersDarkMode && (theme.palette.mode !== 'dark')

  // Only executed on client
  unstable_useEnhancedEffect(() => {

    // re-link sheet container
    emotionCache.sheet.container = document.head;
    // re-inject tags
    const tags = emotionCache.sheet.tags;
    emotionCache.sheet.flush();
    tags.forEach((tag) => {
      (emotionCache.sheet as any)._insertTag(tag);
    });
    // reset cache to reapply global styles
    clientStyleData.reset();
    if (isSystemDarkMode && !manual) {
      toggleColorMode()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isSystemDarkMode]);


  return (
    <html lang="zh">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <meta name="theme-color" content={theme.palette.primary.main} />
        {title ? <title>{title}</title> : null}
        <Meta />
        <Links />
        <meta name="emotion-insertion-point" content="emotion-insertion-point" />
      </head>
      <body suppressHydrationWarning={false} monica-locale="zh_CN" monica-version="1.0" monica-id="123">
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
});
