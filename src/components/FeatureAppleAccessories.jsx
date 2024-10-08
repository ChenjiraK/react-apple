import Slide from './Layout/Slide';
import CardDetailItem from './Card/CardDetailItem';

const FeatureAppleAccessories = () => {
    const accessories = [
        {
            id: 'accessory_1',
            badgeLabel: '',
            badgeColor: '',
            name: 'Mac Accessories',
            detail: 'Shop Mac Accessories.',
            price: 'Available from $5029.',
            imgSrc: 'https://cdn.shopify.com/s/files/1/0818/1304/5566/files/IMG-14666163.png?v=1726245034&width=256'
        },
        {
            id: 'accessory_2',
            badgeLabel: 'NEW',
            badgeColor: '#bf4800',
            name: 'iPad Accessories',
            detail: 'Shop iPad Accessories.',
            price: 'Available from $5099.',
            imgSrc: 'https://cdn.shopify.com/s/files/1/0818/1304/5566/files/Magic_Keyboard_11_Pro_Silver.png?v=1715100914&width=256'
        },
        {
            id: 'accessory_3',
            badgeLabel: '',
            badgeColor: '',
            name: 'Apple TV Accessories',
            detail: 'Shop TV Accessories.',
            price: 'Available from $5099.',
            imgSrc: 'https://cdn.shopify.com/s/files/1/0818/1304/5566/files/Apple_TV_Remote_PDP_Image_Position-1_LAEN_R1_v1_550x_4174711b-df52-4545-879d-8f3d304b8b17.webp?v=1695334228&width=256'
        },
        {
            id: 'accessory_4',
            badgeLabel: 'NEW',
            badgeColor: '#bf4800',
            name: 'Watch Accessories',
            detail: 'Shop Watch Accessories.',
            price: 'Available from $5025.',
            imgSrc: 'https://cdn.shopify.com/s/files/1/0818/1304/5566/files/Watch_accessoires_v1.jpg?v=1725992290&width=256'
        },
        {
            id: 'accessory_5',
            badgeLabel: 'NEW',
            badgeColor: '#bf4800',
            name: 'iPhone Accessories',
            detail: 'Shop iPhone Accessories.',
            price: 'Available from $5059.',
            imgSrc: 'https://cdn.shopify.com/s/files/1/0818/1304/5566/files/IMG-14666163.png?v=1726245034&width=256'
        },
    ]
    return (
        <div>
            <h1 className='pt-8'>Featured Apple Accessories.</h1>
            <Slide>
                {accessories.map((accessories) => (
                    <div
                        key={accessories.id}
                        className="flex-shrink-0 ml-6 py-7"
                    >
                        <CardDetailItem item={accessories}></CardDetailItem>
                    </div>
                ))}
            </Slide>
        </div>
    );
};

export default FeatureAppleAccessories;

