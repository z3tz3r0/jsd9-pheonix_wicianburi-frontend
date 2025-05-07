import React from 'react';

const TestimonialCard = ({ quote, author, rating, image }) => {
  return (
    <div className="bg-gray-100 rounded-lg p-6 shadow-sm">
      <div className="flex justify-center mb-4">
           <img
             src={image} // Use the image prop as the source
             alt={`${author}'s profile`} // Provide descriptive alt text
             className="w-16 h-16 rounded-full object-cover border-2 border-white shadow-md" // Styles for the profile picture
           />
      </div>
      
      {/*star*/}
      <div className="flex justify-center text-yellow-500 mb-2">
        {Array.from({ length: 5 }).map((_, index) => (
          <svg
            key={index}
            className={`w-4 h-4 fill-current ${
              index < rating ? 'text-yellow-500' : 'text-gray-400'
            }`}
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M10 15l-5.878 3.09 1.176-6.545L.587 5.905l6.545-.952L10 0l2.868 4.953 6.545.952-4.765 4.636L15.878 18.09z" />
          </svg>
        ))}
      </div>
      
      {/*Quote*/}
      <p className="text-gray-700 text-center leading-relaxed mb-4">
        "{quote}"
      </p>
      
      {/*Author*/}
      <p className="text-sm text-gray-500 text-center font-semibold">
        - {author}
      </p>
    </div>
  );
};

export default TestimonialCard;