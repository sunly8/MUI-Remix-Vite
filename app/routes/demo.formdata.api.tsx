import { Button, Container, Divider, Stack, TextField, Typography } from "@mui/material";
import { useState } from "react";

export default function DemoFormdataApi() {

  const [form, setForm] = useState({ name: '' });
  const [result, setResult] = useState<any>(null);
  const submit = (body: any) => {
    fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      body: JSON.stringify(body),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then((response) => response.json())
      .then((data) => setResult(data))
      .catch((error) => setResult(error));
  };

  return <Container>
    <Stack spacing={2}>
      <Typography variant="h6" color="primary">FormData API</Typography>
      <Typography variant="caption" color="text.secondary">app/routes/demo.formdata.api.tsx</Typography>
      <Stack direction="row" spacing={2}>
        <TextField name="name" label="Name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
        <Button variant="contained" onClick={() => submit({ ...form })}>Submit</Button>
      </Stack>
      <Divider />
      <Typography variant="h6" color="secondary">Result:</Typography>
      {result && <pre>
        {JSON.stringify(result, null, 2)}
      </pre>}
    </Stack>
  </Container>;
}
