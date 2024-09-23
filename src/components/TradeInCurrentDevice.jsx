import React from 'react';
import LoopSlide from './Layout/LoopSlide';
import CardProductItem from './Card/CardProductItem';

const TradeInCurrentDevice = () => {
    const devices = [
        {
            id: 'device_1',
            badges: [
                {
                    badgeLabel: 'CYBER WEEK',
                    badgeColor: '#5856D6',
                }
            ],
            name: 'iPhone 13',
            originalPrice: '$5,499.00 USD',
            discount: '',
            totalPrice: '$5,499.00 USD',
            installment: '$785.57/mo. for 7 mo.',
            imageSrc: 'https://cdn.shopify.com/s/files/1/0818/1304/5566/files/IMG-111808_b172a068-7975-4797-b9c7-c72f979c40f5_533x.jpg?v=1713383046'
        },
        {
            id: 'device_2',
            badges: [
                {
                    badgeLabel: 'TRADE–IN',
                    badgeColor: '#0071BC',
                }
            ],
            name: 'Apple Watch Series 8',
            originalPrice: '$5,499.00 USD',
            discount: '',
            totalPrice: '$5,499.00 USD',
            installment: '$785.57/mo. for 7 mo.',
            imageSrc: 'https://cdn.shopify.com/s/files/1/0818/1304/5566/files/Apple_Watch_Series_8_LTE_41mm_Midnight_Aluminum_Midnight_Sport_Band_PDP_Image_Position-1__en-US_17fa6968-d2c4-4bbc-99b0-dbe19a0c8d34_533x.jpg?v=1699340561'
        },
        {
            id: 'device_3',
            badges: [
                {
                    badgeLabel: 'CYBER WEEK',
                    badgeColor: '#5856D6',
                },
                {
                    badgeLabel: 'TRADE–IN',
                    badgeColor: '#0071BC',
                },
            ],
            name: '2022 11-inch iPad Pro',
            originalPrice: '$5,799.00 USD',
            discount: '',
            totalPrice: '$5,799.00 USD',
            installment: '$828.42/mo. for 7 mo.',
            imageSrc: 'https://cdn.shopify.com/s/files/1/0818/1304/5566/files/IMG-9159046_142fcba2-fe60-4eff-976d-fc36025c655a_533x.jpg?v=1713384589'
        },
        {
            id: 'device_4',
            badges: [
                {
                    badgeLabel: 'TRADE–IN',
                    badgeColor: '#0071BC',
                }
            ],
            name: '14-inch MacBook Pro',
            originalPrice: '$6,999.00 USD',
            discount: '',
            totalPrice: '$6,999.00 USD',
            installment: '$999.85/mo. for 7 mo',
            imageSrc: 'https://cdn.shopify.com/s/files/1/0818/1304/5566/files/MacBook_Pro_14_in_Silver_PDP_Image_Position-1__en-US_533x.jpg?v=1693610404'
        },
        {
            id: 'device_5',
            badges: [
                {
                    badgeLabel: 'FREE AIRPODS',
                    badgeColor: '#bf4800',
                }
            ],
            name: 'iPhone 13 Pro Max',
            originalPrice: '$5,999.00 USD',
            discount: 0,
            totalPrice: '$5,999.00 USD',
            installment: '$857/mo. for 7 mo.',
            imageSrc: 'https://cdn.shopify.com/s/files/1/0818/1304/5566/files/iPhone_13_Pro_Max_Graphite_PDP_Image_Position-1A__en-US_d91b587b-43ca-4312-a6bf-5b8739a3e87c_533x.jpg?v=1707225620'
        },
    ]
    return (
        <div>
            <h1 className='text-center py-8'>Trade-in your current device.</h1>
            <div className='flex justify-center'>
                <LoopSlide items={devices}>
                    <CardProductItem />
                </LoopSlide>
            </div>
        </div>
    );
};

export default TradeInCurrentDevice;

