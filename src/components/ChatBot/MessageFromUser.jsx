import React from 'react';


const MessageFromUser = ({ children }) => {

    const content = typeof children === 'string' ? children.split('\n').map((line, i) => (
        <React.Fragment key={i}>{line}<br /></React.Fragment>
    )) : children

    return (
        <div className="flex justify-end">
            <div className="mb-2 py-2 px-4 rounded-lg max-w-[60%] sm:max-w-100 text-white bg-black">
                {content}
            </div>
        </div>
    );
};

export default MessageFromUser