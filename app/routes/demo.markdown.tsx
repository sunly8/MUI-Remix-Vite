import { Container, Typography } from '@mui/material';
import { markdownDoc } from '~/data/demoMarkdoen';
import MD from '~/src/MD';

export default function About() {
  const sx = {
    'blockquote': { borderLeft: '4px solid #e0e0e0', pl: 2, py: 2, bgcolor: '#eeeeee50', fontSize: '.8rem' },
    'h2': { color: 'primary.main' }
  }

  return (
    <Container sx={sx} >
      <Typography variant="h6" color="primary">Markdown</Typography>
      <Typography variant="caption" color="text.secondary">app/routes/demo.markdown.tsx</Typography>
      <MD content={markdownDoc} />
    </Container >
  );
}
