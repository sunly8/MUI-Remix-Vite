import { Typography } from '@mui/material';
import { Link } from '@remix-run/react';

export default function Copyright() {
  return (
    <Typography
      variant="body2"
      align="center"
      sx={{
        color: 'text.secondary',
      }}
    >
      {'Copyright © '}
      <Link color="inherit" to="https://yourdata.plus/">
        YourData<sup>+</sup>
      </Link>{' '}
      {new Date().getFullYear()}.
    </Typography>
  );
}
