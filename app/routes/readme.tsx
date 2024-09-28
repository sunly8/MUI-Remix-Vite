import AppTopbar from "~/src/Topbar";
import { readFileSync } from "fs";
import { MetaFunction, useLoaderData } from "@remix-run/react";
import { Box, Container } from "@mui/material";
import Copyright from "~/src/Copyright";
import MD from "~/src/MD";
import { Fragment } from "react/jsx-runtime";

export const meta: MetaFunction = () => {
  return [{
    title: 'MUI-Remix-Vite example README',
    description: 'This example project combines Material UI, Remix, and Vite to demonstrate how to quickly build modern web applications. By leveraging Material UI\'s beautiful components, developers can easily create responsive user interfaces. Remix offers efficient routing and data loading mechanisms, while Vite\'s fast build and hot-reload features enhance the development experience. Suitable for single-page applications, management dashboards, and e-commerce platforms, it allows for quick startup and customization, improving development efficiency and user experience.',
    keywords: 'Material UI, Remix, Vite, example, web application, responsive design, routing, data loading, development, user experience',
  }]
}

export const loader = async () => {
  const readme = readFileSync('./README.md').toString();
  return { readme };
}

export default function ReadMe() {
  const { readme } = useLoaderData<typeof loader>();
  return <Fragment>
    <AppTopbar />
    <Container>
      <Box sx={{
        width: '100%',
        overflow: 'auto',
      }}>
        <MD content={readme} />
      </Box>
      <Copyright />
    </Container>
  </Fragment>
}