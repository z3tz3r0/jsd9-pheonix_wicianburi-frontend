import React from 'react';


const MessageFromAi = ({ children, isLoading }) => {

    const content = isLoading && typeof children === 'string' ? children.split('\n').map((line, i) => (
        <React.Fragment key={i}>{line}<br /></React.Fragment>
    )) : children

    return (
        <div className="flex justify-start">
            <div className="mb-2 py-2 px-4 rounded-lg max-w-[60%] sm:max-w-100 text-gray-800 bg-gray-200">
                {content}
            </div>
        </div>
    );
};

export default MessageFromAi