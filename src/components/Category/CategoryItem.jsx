import React from 'react';

const CategoryItem = ({ item }) => {
  if (!item) {
    return null;
  }

  return (
      <div className='text-center'>
            <div className='flex justify-center'>
                <img className='h-16' src={item.imgSrc} alt={item.title} />
            </div>
            <p className='text-sm font-bold pt-1'>{item.title}</p>
            {item.price > 0 && <p className='text-gray-121212 text-base pt-1'>From {item.price}</p>}
            {item.otherPrice && <p className='text-gray-121212 text-base pt-1'>{item.otherPrice}</p>}
      </div>
  );
};

export default CategoryItem;
