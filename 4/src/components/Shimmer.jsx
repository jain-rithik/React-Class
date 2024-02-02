import React from 'react';
import { CDN_URL } from "../utils/constants";

const Shimmer = () => {
  // You can adjust the number of shimmer items based on your design
  const shimmerItems = Array.from({ length: 20 }, (_, index) => index + 1);

  return (
    <div className="Food-menu">
      <div className="Food-card">
        {shimmerItems.map((item) => (
          <div key={item} className="shimmer-item">
            <div className="shimmer-img"></div>
            <div className="shimmer-details">
              <div className="shimmer-title"></div>
              <div className="shimmer-rating"></div>
              <div className="shimmer-category"></div>
              <div className="shimmer-cost"></div>
              <div className="shimmer-time"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Shimmer;
