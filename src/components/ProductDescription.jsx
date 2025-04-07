import React from 'react';
import './ProductDescription.css'; // We'll create this next

const ProductDescription = ({ bulletPoints }) => {
  // Ensure bulletPoints is an array; fallback to empty array if not provided
  const points = Array.isArray(bulletPoints) ? bulletPoints : [];

  return (
    <div className="product-description">
      <h2>About This Item</h2>
      <ul>
        {points.length > 0 ? (
          points.map((point, index) => (
            <li key={index}>{point}</li>
          ))
        ) : (
          <li>No description available.</li>
        )}
      </ul>
    </div>
  );
};

export default ProductDescription;