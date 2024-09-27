import { MetaFunction } from "@remix-run/node";
import { Fragment } from "react/jsx-runtime";
import AppTopbar from "~/src/Topbar";
import { Container, Typography, Button, Box, Stack, useTheme, ImageList, ImageListItem } from "@mui/material";
import Copyright from "~/src/Copyright";
import { technologies } from "~/data/technologies";
import { Link } from "@remix-run/react";

export const meta: MetaFunction = () => {
  return [
    { title: "Material UI-Remix-Vite example" },
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
          <Typography variant="h1" component="h1" color="primary">
            Material UI-Remix-Vite example
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
          <Stack direction="row" spacing={2} justifyContent="center">
            <Link to="/readme">
              <Button variant="contained">README</Button>
            </Link>
            <Link to="/demo">
              <Button variant="contained">View Demo</Button>
            </Link>
          </Stack>
          <Copyright />
        </Stack>

      </Container>
    </Fragment>
  );
}

