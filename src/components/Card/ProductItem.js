import React from 'react';

const ProductItem = ({ item }) => {
  if (!item) {
    return null;
  }

  return (
      <div className='p-4 rounded-2xl bg-white shadow-lg'>
            <div className='flex justify-center'>
                <img className='h-16' src='https://www.appstaging.dev/cdn/shop/files/iPad_Pro_13-inch_M4_Chip_Cellular_Hero_Vertical_Screen__USEN.png?v=1715099322&width=256' alt='example' />
            </div>
            <div className='flex flex-col gap-1'>
              <p className='text-xs text-bagde-bf4800'>NEW</p>
              <p className='text-2xl'>iPad Pro M4</p>
              <p className='text-sm'>Thinpossible.</p>
              <p className='text-sm'>From $5999</p>
            </div>
      </div>
  );
};

export default ProductItem;
