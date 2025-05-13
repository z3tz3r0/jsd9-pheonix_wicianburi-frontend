import React from 'react';
import ReactMarkdown from 'react-markdown';

const MessageFromAi = ({ children, isLoading }) => {
  // Ensure children is always treated as a string for ReactMarkdown
  const markdownContent = typeof children === 'string' ? children : '';

  // For loading state, we can render the content differently outside ReactMarkdown
  if (isLoading && typeof children === 'string') {
    return (
      <div className="flex justify-start">
        <div className="mb-2 py-2 px-4 rounded-lg max-w-[60%] sm:max-w-100 text-gray-800 bg-gray-200">
          {children.split('\n').map((line, i) => (
            <React.Fragment key={i}>{line}<br /></React.Fragment>
          ))}
        </div>
      </div>
    );
  }

  // For non-loading state, use ReactMarkdown
  return (
    <div className="flex justify-start">
      <div className="mb-2 py-2 px-4 rounded-lg max-w-[60%] sm:max-w-100 text-gray-800 bg-gray-200">
        <ReactMarkdown>
          {markdownContent}
        </ReactMarkdown>
      </div>
    </div>
  );
};

export default MessageFromAi;