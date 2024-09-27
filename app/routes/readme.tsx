import AppTopbar from "~/src/Topbar";
import { readFileSync } from "fs";
import { useLoaderData } from "@remix-run/react";
import { Box, Container } from "@mui/material";
import Copyright from "~/src/Copyright";
import MD from "~/src/MD";
import { Fragment } from "react/jsx-runtime";


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