import React, { useEffect, useRef } from 'react';
import './ScrollImageGallery.css'; // We'll create this next

const ScrollImageGallery = ({ images }) => {
  const imageRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target); // Stop observing once visible
          }
        });
      },
      { threshold: 0.3 } // Trigger when 30% of the image is visible
    );

    imageRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      imageRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, [images]);

  return (
    <div className="scroll-gallery">
      {images.map((item, index) => (
        <div
          key={index}
          ref={(el) => (imageRefs.current[index] = el)}
          className="gallery-item"
        >
          <img src={item.url} alt={item.description} />
          <p>{item.description}</p>
        </div>
      ))}
    </div>
  );
};

export default ScrollImageGallery;