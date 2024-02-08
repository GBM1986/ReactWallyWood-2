import React from 'react';

const TruncatedDescription = ({ description, maxCharacters }) => {
  // Function to truncate the description to a maximum number of characters
  const truncateDescription = (text, maxLength) => {
    return text.length > maxLength ? text.substring(0, maxLength) + '...' : text;
  };

  // Truncate the description
  const truncatedContent = truncateDescription(description, maxCharacters);

  // Render the truncated description with dangerouslySetInnerHTML
  return <div dangerouslySetInnerHTML={{ __html: truncatedContent }} />;
};

export default TruncatedDescription;
