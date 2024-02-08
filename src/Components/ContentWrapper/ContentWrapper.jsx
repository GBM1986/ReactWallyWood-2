import React from 'react';

export const ContentWrapper = ({ title, maxwidth, children }) => {
  return (
    <div className={`bg-light w-full max-w-${maxwidth} mx-auto px-2.3rem md:px-1rem`}>
      <h1>{title}</h1>
      {children}
    </div>
  );
}


