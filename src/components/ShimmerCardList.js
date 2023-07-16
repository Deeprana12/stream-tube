import React from 'react';
import ShimmerCard from './ShimmerCard'; // Assume the ShimmerCard component is in a separate file

const ShimmerCardList = () => {
  // Create an array with 50 elements for the shimmer effect
  const shimmerCards = Array.from({ length: 50 }, (_, index) => <ShimmerCard key={index} />);

  return (
    <div className="ml-8 mt-8 grid gap-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {shimmerCards}
    </div>
  );
};

export default ShimmerCardList;
