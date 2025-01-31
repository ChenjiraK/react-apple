import React from 'react';
import BadgeLabel from './Label/BadgeLabel';
import Slide from './Layout/Slide';
import { IProduct } from '@/types/IProduct';

type SlideCategoryProps = {
    items: IProduct[]
}

const SlideCategory: React.FC<SlideCategoryProps> = ({ items = [] }) => {
  return (
    <div>
      <Slide customHeightArrow='133px'>
        {items.map((item, index) => (
            <div
                key={`item-${index}`}
                className="flex-shrink-0 mx-5"
            >
                <div className="flex">
                    <div className='w-[84px] h-[84px]'>
                        <img className='h-full' src={item.imgSrc} alt="category_image" />
                    </div>
                    <div className="flex flex-col pl-2 self-end">
                      {item.badges.map((badge, index) => (
                        <BadgeLabel 
                          key={`badge-${index}`} 
                          text={badge.badgeLabel} 
                          color={badge.badgeColor} 
                          textClass='text-7px'>
                        </BadgeLabel>
                      ))}
                      <div className='text-11px font-bold'>{item.name}</div>
                      <div className='text-9px'>From {item.currency} {item.price}</div>
                    </div>
                </div>
            </div>
        ))}
      </Slide>
    </div>
  );
};
export default SlideCategory;