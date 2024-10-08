import SidemageWithContent from "./Card/SidemageWithContent";

const Assistant = () => {
    const assists = [
        {
            id:'assist_1',
            imageUrl: 'https://www.appstaging.dev/cdn/shop/files/Untitled_1500x.png?v=1695334787',
            title: 'Need help?',
            detail: 'Trained professionals have got you covered on all your questions.',
            btn_text: 'Ask the experts',
            routeUrl: '',
        },
        {
            id:'assist_2',
            imageUrl: 'https://www.appstaging.dev/cdn/shop/files/Tienda_MC9_png_1500x.webp?v=1695334787',
            title: 'Stores near you.',
            detail: 'Find your nearest store.',
            btn_text: 'Find a store',
            routeUrl: '',
        },
        {
            id:'assist_3',
            imageUrl: 'https://www.appstaging.dev/cdn/shop/files/screenshot-2015-08-28-09-22-31_png_1500x.webp?v=1702582399',
            title: 'Join a class.',
            detail: 'Discover all the classes we offer.',
            btn_text: 'RSVP',
            routeUrl: '',
        },
    ]
    return (
        <div>
            {assists.map((item, index) =>(
                <div key={item.id} className="py-2">
                    <SidemageWithContent posistionImage={ index % 2 === 0 ? 'left' : 'right' } item={item} />
                </div>
            ))}
        </div>
    );
};

export default Assistant;

