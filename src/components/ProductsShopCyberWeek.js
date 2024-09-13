import React from 'react';
import LoopSlide from './Layout/LoopSlide';
import CardProductItem from './Card/CardProductItem';

const ProductCarousel = () => {
    const productItem = [
        {
            id: 'product_week_1',
            index: 0,
            badgeLabel: 'NEW',
            badgeColor: '#bf4800',
            name: '13-inch MacBook Air',
            originalPrice: '$6,000.00 USD',
            discount: '$301.00',
            totalPrice: '$5,699.00 USD',
            installment: '$814.14/mo. for 7 mo.',
            imageSrc: 'https://cdn.shopify.com/s/files/1/0818/1304/5566/files/IMG-5561181_627467b5-2f30-4864-a9b9-7c8f5106422b_533x.jpg?v=1722030121'
        },
        {
            id: 'product_week_2',
            index: 1,
            badgeLabel: 'NEW',
            badgeColor: '#bf4800',
            name: '2021 10.2-inch iPad',
            originalPrice: '$5,399.00 USD',
            discount: 0,
            totalPrice: '$5,399.00 USD',
            installment: '$771.28/mo. for 7 mo.',
            imageSrc: 'https://cdn.shopify.com/s/files/1/0818/1304/5566/files/IMG-9021287_26dbd499-660f-40fd-a1cc-b83320369375_533x.jpg?v=1713382279'
        },
        {
            id: 'product_week_4',
            index: 3,
            badgeLabel: 'FREE AIRPODS',
            badgeColor: '#bf4800',
            name: 'iPhone 13 Pro Max',
            originalPrice: '$5,999.00 USD',
            discount: 0,
            totalPrice: '$5,999.00 USD',
            installment: '$857/mo. for 7 mo.',
            imageSrc: 'https://cdn.shopify.com/s/files/1/0818/1304/5566/files/iPhone_13_Pro_Max_Graphite_PDP_Image_Position-1A__en-US_d91b587b-43ca-4312-a6bf-5b8739a3e87c_533x.jpg?v=1707225620'
        },
        {
            id: 'product_week_5',
            index: 4,
            badgeLabel: 'NEW',
            badgeColor: '#bf4800',
            name: '13-inch MacBook Air',
            originalPrice: '$6,000.00 USD',
            discount: '$301.00',
            totalPrice: '$5,699.00 USD',
            installment: '$814.14/mo. for 7 mo.',
            imageSrc: 'https://cdn.shopify.com/s/files/1/0818/1304/5566/files/IMG-5561181_627467b5-2f30-4864-a9b9-7c8f5106422b_533x.jpg?v=1722030121'
        },
        {
            id: 'product_week_3',
            index: 2,
            badgeLabel: 'CYBER WEEK',
            badgeColor: '#5856D6',
            name: 'Magic Mouse 2',
            originalPrice: '$5,099.00 USD',
            discount: 0,
            totalPrice: '$5,099.00 USD',
            installment: '$728.42/mo. for 7 mo.',
            imageSrc: 'https://cdn.shopify.com/s/files/1/0818/1304/5566/files/IMG-4477839_533x.png?v=1713384885'
        },
    ]
    return (
        <div>
            <h1 className='text-center py-8'>Shop Cyber Week products August 1–4.</h1>
            <div className='flex justify-center'>
                <LoopSlide items={productItem}>
                    <CardProductItem />
                </LoopSlide>
            </div>
        </div>
    );
};

export default ProductCarousel;

