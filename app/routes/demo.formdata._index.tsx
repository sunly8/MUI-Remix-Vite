import { Button, Divider, Stack, TextField, Typography } from "@mui/material";
import { Form, useActionData } from "@remix-run/react";
import { Container } from "@mui/material";
import { json } from "@remix-run/node";
import { ActionFunctionArgs } from "@remix-run/node";
import { saveUser } from "../.server/dbservice";

export async function action({ request }: ActionFunctionArgs) {
  const formData = await request.formData();
  const name = formData.get("name");
  // save to database /app/.server/dbservice.ts
  const result = await saveUser(name as string);
  const data = {
    success: result.success,
    message: result.message,
    data: result.data, // if you want to return data to the client
  };
  return json({ data });
}

export default function FormData() {
  const result = useActionData<typeof action>();

  return (
    <Container>
      <Stack spacing={2}>
        <Typography variant="h6" color="primary">FormData Native</Typography>
        <Typography variant="caption" color="text.secondary">app/routes/demo.formdata._index.tsx</Typography>
        <Form method="post" style={{ display: 'flex', gap: 2 }}>
          <TextField name="name" label="Name" />
          <Button variant="contained" type="submit">Save</Button>
        </Form>
        <Divider />
        <Typography variant="h6" color="secondary">Result:</Typography>
        {result && <pre>
          {JSON.stringify(result, null, 2)}
        </pre>}

      </Stack>
    </Container>
  );
}
