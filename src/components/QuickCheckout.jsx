import React from 'react';
import LoopSlide from './Layout/LoopSlide.jsx';
import CardProductItem from './Card/CardProductItem.jsx';

const QuickCheckout = () => {
    const quickProducts = [];
    const setQuickProducts = () => {
        for(let i=0; i<7 ; i++) {
            quickProducts.push({ 
                id: 'quick_ipad_4',
                badges: [
                    {
                        badgeLabel: 'NEW',
                        badgeColor: '#bf4800',
                     }
                ],
                name: 'AirPods 4 with Active Noise Cancellation',
                originalPrice: '$5,179.00 USD',
                discount: '',
                totalPrice: '$5,179.00 USD',
                installment: '$739.85/mo. for 7 mo.',
                imageSrc: 'https://cdn.shopify.com/s/files/1/0818/1304/5566/files/IMG-14769919_533x.jpg?v=1726245079'
            })
        }
    };
    setQuickProducts();
    
    return (
        <div>
            <h1 className='text-center py-8'>Quick checkout.</h1>
            <div className='flex justify-center'>
                <LoopSlide items={quickProducts}>
                    <CardProductItem />
                 </LoopSlide>
            </div>
        </div>
    );
};

export default QuickCheckout;

