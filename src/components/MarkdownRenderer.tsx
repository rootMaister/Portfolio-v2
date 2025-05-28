import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import rehypeSanitize, { defaultSchema } from 'rehype-sanitize';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { nord } from 'react-syntax-highlighter/dist/esm/styles/prism';

interface MarkdownRendererProps {
  content: string;
  className?: string;
}

// Custom schema that extends the default one
const schema = {
  ...defaultSchema,
  attributes: {
    ...defaultSchema.attributes,
    div: [...(defaultSchema.attributes?.div || []), 'className', 'class'],
    iframe: [
      'src',
      'frameBorder',
      'allow',
      'allowFullScreen',
      'title',
      'width',
      'height',
      'className',
      'class'
    ],
  },
  tagNames: [
    ...(defaultSchema.tagNames || []),
    'iframe'
  ]
};

export const MarkdownRenderer: React.FC<MarkdownRendererProps> = ({ content, className }) => {
  if (!content) {
    console.warn('No content provided to MarkdownRenderer');
    return null;
  }

  console.log('Rendering markdown content:', content.substring(0, 100));

  return (
    <div className={className}>
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[
          rehypeRaw,
          [rehypeSanitize, schema]
        ]}
        components={{
          img: ({ node, src, alt, ...props }) => {
            console.log('Rendering image:', { src, alt });
            return (
              <img src={src} alt={alt} className="w-full rounded-lg" {...props} />
            );
          },
          p: ({node, className, children, ...props}) => {
            // Convert children to array and handle null/undefined cases
            const childrenArray = React.Children.toArray(children);
            
            // Check if any child is an image
            const hasImg = childrenArray.some(child => 
              React.isValidElement(child) && child.type === 'img'
            );

            return hasImg ? (
              <div className="my-8">{children}</div>
            ) : (
              <p className={className} {...props}>{children}</p>
            );
          },
          code({node, inline, className, children, ...props}: {
            node?: any;
            inline?: boolean;
            className?: string;
            children?: React.ReactNode;
          } & React.HTMLAttributes<HTMLElement>) {
            const match = /language-(\w+)/.exec(className || '');
            return !inline && match ? (
              <SyntaxHighlighter
                {...props}
                style={nord}
                language={match[1]}
                PreTag="div"
              >
                {String(children).replace(/\n$/, '')}
              </SyntaxHighlighter>
            ) : (
              <code {...props} className={className}>
                {children}
              </code>
            );
          },
          // Add custom handling for iframes
          div: ({node, className, children, ...props}) => {
            if (className?.includes('aspect-video')) {
              return (
                <div className="my-8 aspect-video">
                  {children}
                </div>
              );
            }
            return <div className={className} {...props}>{children}</div>;
          },
          iframe: ({node, ...props}) => (
            <iframe {...props} className="w-full h-full rounded-lg" />
          ),
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
}; 