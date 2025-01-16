import { Box } from '@mui/material';
import ReactMarkdown from 'react-markdown';
import rehypeKatex from 'rehype-katex';
import rehypeRaw from 'rehype-raw';
import remarkGfm from 'remark-gfm';
import remarkMath from 'remark-math';
import SyntaxHighlighter from './SyntaxHighlighter';
import { ClientOnly } from 'remix-utils/client-only';
import('katex/dist/katex.min.css');

interface MarkdownProps {
  content: string;
}

const MD: React.FC<MarkdownProps> = ({ content }) => {

  return (
    <Box className="markdown-container" sx={{
      '& a': { color: 'secondary.main' },
      '& img': { maxWidth: '100%' },
    }}>
      <ReactMarkdown
        remarkPlugins={[remarkMath, remarkGfm]}
        rehypePlugins={[rehypeKatex, rehypeRaw]}
        components={{
          code({ className, children, ...props }: any) {
            return (
              <ClientOnly fallback={<code {...props}>{children}</code>}>
                {() => <SyntaxHighlighter className={className} children={children} {...props} />}
              </ClientOnly>
            );
          }
        }}
      >
        {content}
      </ReactMarkdown>
    </Box>
  );
};

export default MD;
