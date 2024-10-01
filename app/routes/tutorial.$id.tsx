import { Box, Container } from "@mui/material";
import { useLoaderData } from "@remix-run/react";
import { LoaderFunctionArgs } from "@remix-run/server-runtime";
import { readFileSync } from "fs";
import MD from "~/src/MD";

export const loader = ({ params }: LoaderFunctionArgs) => {
  const { id } = params;
  const file = readFileSync(`./app/data/tutorials/${id || 1}.md`).toString();
  return { file };

};

export default function Tutorial() {

  const { file } = useLoaderData<typeof loader>();
  return <Container>
    <Box sx={{
      width: '100%',
      overflow: 'auto',
    }}>
      <MD content={file} />
    </Box>
  </Container>

}
