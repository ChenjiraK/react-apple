import CardProductItem from "./Card/CardProductItem";
import LoopSlide from './Layout/LoopSlide';

const AllThingsIpad = () => {
    const productsIpad = [
        {
            id: 'ipad_1',
            badges: [
                {
                    badgeLabel: 'NEW',
                    badgeColor: '#bf4800',
                }
            ],
            name: '2024 Apple Pencil Pro',
            originalPrice: '$5,129.00 USD',
            discount: '',
            totalPrice: '$5,129.00 USD',
            installment: '$732.71/mo. for 7 mo.',
            imageSrc: 'https://cdn.shopify.com/s/files/1/0818/1304/5566/files/IMG-13079419_533x.jpg?v=1715112693'
        },
        {
            id: 'ipad_2',
            badges: [
                {
                    badgeLabel: 'NEW',
                    badgeColor: '#bf4800',
                }
            ],
            name: 'Magic Keyboard for iPad Pro 11‑inch',
            originalPrice: '$5,299.00 USD',
            discount: '',
            totalPrice: '$5,299.00 USD',
            installment: '$757/mo. for 7 mo.',
            imageSrc: 'https://cdn.shopify.com/s/files/1/0818/1304/5566/files/IMG-13087521_ab743aaf-ef10-46aa-a6d2-e78039b8323d_533x.jpg?v=1715112319'
        },
        {
            id: 'ipad_3',
            badges: [
                {
                    badgeLabel: 'NEW',
                    badgeColor: '#bf4800',
                }
            ],
            name: 'Smart Folio for iPad Pro 13-inch',
            originalPrice: '$5,099.00 USD',
            discount: '',
            totalPrice: '$5,099.00 USD',
            installment: '$728.42/mo. for 7 mo.',
            imageSrc: 'https://cdn.shopify.com/s/files/1/0818/1304/5566/files/IMG-13079443_533x.jpg?v=1715112464'
        },
        {
            id: 'ipad_4',
            badges: [
                {
                    badgeLabel: 'NEW',
                    badgeColor: '#bf4800',
                }
            ],
            name: 'Smart Folio for iPad Air 11-inch',
            originalPrice: '$5,079.00 USD',
            discount: '',
            totalPrice: '$5,079.00 USD',
            installment: '$725.57/mo. for 7 mo.',
            imageSrc: 'https://cdn.shopify.com/s/files/1/0818/1304/5566/files/IMG-13079423_533x.jpg?v=1715112318'
        },
        {
            id: 'ipad_5',
            badges: [
                {
                    badgeLabel: 'NEW',
                    badgeColor: '#bf4800',
                }
            ],
            name: '35W Dual USB-C Port Power Adapter',
            originalPrice: '$5,049.00 USD',
            discount: '',
            totalPrice: '$5,049.00 USD',
            installment: '$721.28/mo. for 7 mo.',
            imageSrc: 'https://cdn.shopify.com/s/files/1/0818/1304/5566/files/IMG-12330703___resized_4000_4000_533x.png?v=1718732133'
        },
    ]
    return (
        <div>
            <h1 className='text-center py-8'>All things iPad.</h1>
            <div className='flex justify-center'>
                <LoopSlide items={productsIpad}>
                    <CardProductItem />
                </LoopSlide>
            </div>
        </div>
    );
};

export default AllThingsIpad;

