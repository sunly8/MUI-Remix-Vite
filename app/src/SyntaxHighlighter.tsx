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
  return !inline && match ? <Prism customStyle={{display: 'block'}} style={isMounted}
    language={match[1]}
    PreTag={'span'}
    {...props} >
    {String(children).replace(/\n$/, '')}
  </Prism> : children;
}
