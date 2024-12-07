import React from 'react';
import BadgeLabel from './Label/BadgeLabel.jsx';
import Slide from './Layout/Slide';
import { IProduct } from '@/types/IProduct.js';

type SlideCategoryProps = {
    items: IProduct[]
}

const SlideCategory: React.FC<SlideCategoryProps> = ({ items = [] }) => {
  return (
    <div>
      <Slide positionCss='justify-center'>
        {items.map((item) => (
            <div
                key={item.id}
                className="flex-shrink-0 mx-5"
            >
                <div className="flex">
                    <div className='w-[84px] h-[84px]'>
                        <img className='h-full' src={item.imgSrc} alt="category_image" />
                    </div>
                    <div>
                        <BadgeLabel text={item.badgeLabel} color={item.badgeColor}></BadgeLabel>
                    </div>
                </div>
            </div>
        ))}
      </Slide>
    </div>
  );
};
export default SlideCategory;