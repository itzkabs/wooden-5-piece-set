import React from 'react';
import ProductDescription from './ProductDescription'; // Import the new component
import ScrollImageGallery from './ScrollImageGallery'; // Import the new component
import './ProductPage.css'; // We'll create this next

const ProductPage = () => {
  // Sample product data (replace with details from the Amazon listing)
  const product = {
    title: "Wooden Spoons for Cooking, Wooden Cooking Utensils Set, Nonstick Kitchen Cookware – 5-piece set of wooden utensils with holder",
    price: "$24.99",
    image: "../wooden-5-piece-set/images/main.png", // Replace with actual image URL
    bulletPoints: [
        "UNMATCHED DURABILITY: Crafted from a single piece of 100% natural teak wood, AYZI. kitchen utensils promise a lifetime of use. These tools are not only beautiful but also solid, sturdy, smooth, and well-designed with a superb finish. The spoon set is guaranteed not to crack, melt, or retain odors. Due to the natural material, the utensils may vary in shade",
        "COMPLETE SET OF 5: This all-inclusive and comprehensive set thoughtfully comprises five essential cooking utensils, each meticulously selected and curated to meet the diverse culinary needs of any kitchen enthusiast. The set also boasts a beautifully crafted wooden barrel, which provides ample storage space for all your utensils, ensuring a neat and organized kitchen environment, making every meal preparation a seamless and enjoyable endeavor.",
        "ECO-FRIENDLY AND SAFE: Embrace a healthy, eco-friendly alternative free from chemicals like silicone. These utensils are safe for your non-stick pots and pans, preventing scratches and damage. Say goodbye to plastic as these heat-resistant and sustainable tools offer a perfect solution",
        "EFFORTLESS MAINTENANCE: For optimal preservation, hand wash in warm soapy water, rinse thoroughly, and store dry. Apply a coating of mineral oil to maintain the smooth finish. Use the wooden container for dry storage",
        "PERFECT GIFT AND SATISFACTION GUARANTEE: Express your appreciation with this unique and perfect gift idea. These AYZI. tools promise complete satisfaction. If you are not entirely happy for any reason, please contact us for a prompt replacement or reimbursement."
      ],
    rating: 5,
    reviews: 1,
    galleryImages: [
        {
          url: "/wooden-5-piece-set/images/2.jpg",
          description: "Five Essential Pieces: Includes a variety of spatula shapes and sizes for different cooking tasks—ideal for flipping, stirring, and scraping.",
        },
        {
            url: "/wooden-5-piece-set/images/3.jpg",
          description: "Ergonomic Design: Comfortable, well-balanced handles provide a secure grip for easy maneuverability.",
        },
        {
            url: "/wooden-5-piece-set/images/4.jpg",
          description: "Non-Scratch: Gentle on all cookware, including non-stick pans, preventing scratches and damage.",
        },
        {
            url: "/wooden-5-piece-set/images/2.jpg",
            description: "Premium Quality Material: Made from durable, sustainably sourced teak wood known for its strength and natural resistance to moisture.",
          },
          {
              url: "/wooden-5-piece-set/images/3.jpg",
            description: "Easy to Clean: Hand wash with warm water and mild soap for long-lasting use.",
          },
          {
              url: "/wooden-5-piece-set/images/4.jpg",
            description: "Unmatched Durability: Crafted from a single piece of 100% natural teak wood, AYZI. kitchen utensils promise a lifetime of use.",
          },
      ],
  };

  return (
    <div className="product-page">
      <div className="product-container">
        {/* Product Image */}
        <div className="product-image">
          <img src={product.image} alt={product.title} />
        </div>

        {/* Product Details */}
        <div className="product-details">
          <h1>{product.title}</h1>
          <div className="product-rating">
            <span>Rating: {product.rating} ★</span>
            <span>({product.reviews} reviews)</span>
          </div>
          <p className="product-price">{product.price}</p>
          <ProductDescription bulletPoints={product.bulletPoints} /> {/* Use the component */}
          <button className="add-to-cart">Add to Cart</button>
        </div>
      </div>
            {/* Scrollable Image Gallery */}
            <ScrollImageGallery images={product.galleryImages} />

    </div>
  );
};

export default ProductPage;