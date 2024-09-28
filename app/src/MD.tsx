import { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkMath from 'remark-math';
import remarkGfm from 'remark-gfm';
import rehypeKatex from 'rehype-katex';
import rehypeRaw from 'rehype-raw';
import SyntaxHighlighter from './SyntaxHighlighter';

interface MarkdownProps {
  content: string;
}

const MD: React.FC<MarkdownProps> = ({ content }) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    import('katex/dist/katex.min.css');
  }, []);

  return (
    <div className="markdown-container">
      <ReactMarkdown
        remarkPlugins={[remarkMath, remarkGfm]}
        rehypePlugins={[rehypeKatex, rehypeRaw]}
        components={{
          code({ className, children, ...props }: any) {
            return isMounted
              ? <SyntaxHighlighter className={className} children={children} {...props} />
              : <code className={className} {...props}>
                {children}
              </code>;
          }
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
};

export default MD;
