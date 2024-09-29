import { Button, Typography } from '@mui/material';
import { Link } from '@remix-run/react';

export default function Copyright() {
  return (
    <Typography
      variant="body2"
      align="center"
      sx={{
        color: 'text.secondary',
        my: 10
      }}
    >
      {'Copyright © '}
      <Link to="https://yourdata.plus/">
        <Typography variant='caption' color='text.secondary'>YourData<sup>+</sup></Typography>
      </Link>{' '}
      {new Date().getFullYear()}.
    </Typography>
  );
}
