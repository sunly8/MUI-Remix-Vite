import { useEffect, useState } from 'react';
import { Prism } from 'react-syntax-highlighter';

export default function SyntaxHighlighter({ node, inline, className, children, ...props }: any) {
  const [isMounted, setIsMounted] = useState<any>();
  useEffect(() => {
    import('react-syntax-highlighter/dist/cjs/styles/prism/vsc-dark-plus')
      .then((res) => {
        return setIsMounted(res.default);
      });
  }, []);
  const match = /language-(\w+)/.exec(className || 'language-js');
  return !inline && match ? <Prism style={isMounted}
    language={match[1]}
    PreTag="div"
    {...props} >
    {String(children).replace(/\n$/, '')}
  </Prism> : <code className={className} {...props}>
    {children}
  </code>;
}
