import { useOutletContext, useRouteLoaderData } from "react-router";
import { RootOutletContext } from "~/root";
import { Button, ButtonGroup, Container, Stack, Typography } from "@mui/material";
import { useAppColorMode } from "~/src/Theme";

export default function DemoUseContext() {

  const { user: fromRoot } = useRouteLoaderData('root') as RootOutletContext;
  const { user: fromContext, setSnk } = useOutletContext<RootOutletContext>();
  const { mode, toggleColorMode } = useAppColorMode()
  return <Container>
    <Stack spacing={4}>
      <Stack spacing={2}>
        <Typography variant="h3" color="primary">Use context</Typography>
        <Typography variant="caption" color="text.secondary">app/routes/demo.usecontext.tsx</Typography>
      </Stack>
      <Typography variant="h6" color="secondary">1. Use Route Loader Data</Typography>
      <pre>{JSON.stringify(fromRoot, null, 2)}</pre>
      <Typography variant="h6" color="secondary">2. Use Outlet Context</Typography>
      <pre>{JSON.stringify(fromContext, null, 2)}</pre>
      <Typography variant="h6" color="secondary">3. Global Snackbar</Typography>
      <ButtonGroup>
        <Button color="success" onClick={() => setSnk({ success: true, message: 'Good job!' })}>success</Button>
        <Button color="error" onClick={() => setSnk({ success: false, message: 'Bad job!' })}>error</Button>
      </ButtonGroup>
      <Typography variant="h6" color="secondary">3. By provider</Typography>
      <Stack direction="row" spacing={2}>
        <Typography variant="h6" color="secondary">Mode: {mode}</Typography>
        <Button variant="contained" onClick={() => toggleColorMode()}>{mode === 'light' ? 'toggle Dark' : 'toggle Light'}</Button>
      </Stack>
    </Stack>
  </Container>;
}
