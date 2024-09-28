import { MetaFunction } from "@remix-run/node";
import { Fragment } from "react/jsx-runtime";
import AppTopbar from "~/src/Topbar";
import { Container, Typography, Button, Box, Stack, useTheme } from "@mui/material";
import Copyright from "~/src/Copyright";
import { technologies } from "~/data/technologies";
import { Link } from "@remix-run/react";

export const meta: MetaFunction = () => {
  return [
    { title: "MUI-Remix-Vite example" },
    { name: "keywords", content: "Material UI, mui, Remix, Vite, ts" },
    { name: "description", content: "This is a Material UI-Remix-Vite example, including many necessary examples." },
  ];
};

export default function Index() {
  const theme = useTheme();
  return (
    <Fragment>
      <AppTopbar />
      <Container maxWidth="md" sx={{ py: 8 }}>
        <Stack spacing={4}>
          <Typography variant="h2" component="h1" color="primary" sx={{ py: 8 }}>
            MUI-Remix-Vite example
          </Typography>
          {technologies.map((tech, index) => (
            <Stack key={index} direction="row" spacing={2} alignItems="center">
              <Stack sx={{ width: 120, height: 50 }} alignItems="center" justifyContent="center">
                <img
                  src={tech.logo}
                  alt={tech.name}
                  style={{
                    maxWidth: '100%',
                    maxHeight: '100%',
                    filter: theme.palette.mode === 'dark' && (index === 0 || index === 3) ? 'invert(1)' : 'none',
                    transition: 'filter 0.3s ease',
                  }}
                />
              </Stack>
              <Typography variant="body1">
                {tech.description}
              </Typography>
            </Stack>
          ))}
          <Stack direction="row" spacing={2} justifyContent="center" sx={{ p: 4 }}>
            <Link to="/readme">
              <Button variant="outlined">README</Button>
            </Link>
            <Link to="/demo">
              <Button variant="contained">View Demo</Button>
            </Link>
          </Stack>
          <Copyright />
        </Stack>
        <Box sx={{
          position: 'fixed',
          p: 4,
          top: 0,
          right: '-50vw',
          width: '70%',
          fontSize: 10,
          color: 'secondary',
          height: '100%',
          transform: 'skew(-45deg)',
          transformOrigin: 'top right',
          background: 'linear-gradient(135deg, rgba(135,135,255,0.1) 0%, rgba(80,20,255,0.3) 100%)',
          zIndex: -1,
          animation: 'gradientAnimation 10s ease infinite',
          '@keyframes gradientAnimation': {
            '0%': {
              opacity: 1
            },
            '50%': {
              opacity: 0.5
            },
            '100%': {
              opacity: 1
            },
          },
        }}>
          <Box sx={{ opacity: 0.3 }}>
            <br />Remix<br /> is a full-stack web framework designed to leverage web standards
            <br />Vite<br /> is a fast and modern front-end build tool that enhances the development experience significantly.
            <br />Material UI<br /> is a widely-used React UI framework that implements Google's Material Design guidelines.
            <br />
            <br />TS
            <br />TypeScript is a typed superset of JavaScript that compiles to plain JavaScript.
            <br />
            <br />23:55:02 [vite] hmr update /app/routes/_index.tsx (x26)
            <br />23:55:28 [vite] hmr update /app/routes/_index.tsx (x27)
            <br />23:55:36 [vite] hmr update /app/routes/_index.tsx (x28)
          </Box>
        </Box>
      </Container>
    </Fragment>
  );
}

