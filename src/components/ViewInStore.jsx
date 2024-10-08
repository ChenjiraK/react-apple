import CardDetailItem from "./Card/CardDetailItem";
import Slide from './Layout/Slide';

const ViewInStore = () => {
    const stores = [
        { 
            id: 'store_1', 
            badgeLabel: 'IN STORE' ,
            badgeColor: '#707070',
            name: 'Delivery and pick up', 
            detail:'Get free delivery or in-store pick up.', 
            detail2: 'Pick up your online order at the Apple Store.', 
            imgSrc: 'https://cdn.shopify.com/s/files/1/0818/1304/5566/files/image_118.png?v=1695334253&width=256' 
        },
        { 
            id: 'store_2', 
            badgeLabel: 'IN STORE' ,
            badgeColor: '#707070',
            name: 'Find a store', 
            detail: 'Shop the latest Apple products.', 
            detail2: 'More ways to shop: Find an Apple Store or another retailer near you.', 
            imgSrc: 'https://cdn.shopify.com/s/files/1/0818/1304/5566/files/image_118_9e50e4eb-b522-4f35-88d8-d6abffc60505.png?v=1695334255&width=256' 
        },
        { 
            id: 'store_3', 
            badgeLabel: 'IN STORE' ,
            badgeColor: '#707070',
            name: 'Join a class', 
            detail: 'Free sessions.', 
            detail2: 'Free sessions that inspire hands-on creativity in photography, art, music and more.', 
            imgSrc: 'https://cdn.shopify.com/s/files/1/0818/1304/5566/files/APP_Block_image_688ab9ee-9d83-4f39-8f1c-9efe82370fa7.png?v=1695334253&width=256' 
        },
        { 
            id: 'store_4', 
            badgeLabel: 'IN STORE' ,
            badgeColor: '#707070',
            name: 'Appointments', 
            detail: 'Apple Support has you covered.', 
            detail2: 'From setting up your device to recovering your Apple ID to replacing the screen, Apple Support has you covered.', 
            imgSrc: 'https://cdn.shopify.com/s/files/1/0818/1304/5566/files/image_110.png?v=1695334253&width=256' 
        },
      ];
    return (
        <div>
            <div className="text-4xl font-semibold mt-6 text-center">View in-store classes and support.</div>
                <Slide>
                    {stores.map((store) => (
                        <div
                            key={store.id}
                            className="flex-shrink-0 ml-6 py-7"
                        >
                            <CardDetailItem key={store.id} item={store}></CardDetailItem>
                        </div>
                    ))}
                </Slide>
        </div>
    );
};

export default ViewInStore;

