import { Button, Container, Divider, Stack, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { hookFetcher } from "~/src/hooks";

export default function DemoFormdataFetch() {
  // app/routes/api.demo.$action.ts
  // hookFetcher is a custom Fetcher in app/src/hooks.ts
  // You can name multiple hookFetchers as long as the names "fetcher" and "submit" use aliases
  const { fetcher, submit } = hookFetcher('/api/demo/forfetch');
  // const { fetcher: fetcherXX, submit: submitXX } = hookFetcher('/api/demo/XX');
  const [form, setForm] = useState({ name: '' });

  return <Container>
    <Stack spacing={2}>
      <Typography variant="h6" color="primary">FormData Fetch</Typography>
      <Typography variant="caption" color="text.secondary">app/routes/demo.formdata.fetch.tsx</Typography>
      <Stack direction="row" spacing={2}>
        <TextField name="name" label="Name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
        <Button variant="contained" onClick={() =>
          submit({ ...form })
        }>Submit</Button>
      </Stack>
      <Divider />
      <Typography variant="h6" color="secondary">Fetch Status:</Typography>
      <pre> {fetcher.state}</pre>
      <Typography variant="h6" color="secondary">Result:</Typography>
      {fetcher.data && <pre>
        {JSON.stringify(fetcher.data, null, 2)}
      </pre>}
    </Stack>
  </Container>;

}
