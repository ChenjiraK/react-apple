import React from 'react';
import Slide from './Layout/Slide';
import CardDetailItem from './Card/CardDetailItem.jsx';

const PeaceOfMindWithAppleCare = () => {
    const productsAppleCare = [];
    const setProductAppleCare = () => {
        for(let i=0; i<7 ; i++) {
            productsAppleCare.push({ 
                id: `applecare_${i}`, 
                badgeLabel: '' ,
                badgeColor: '',
                name: 'iPhone', 
                detail: 'AppleCare+ from $00 for 2 years.', 
                detail2: 'Add AppleCare+ when you purchase your iPhone online or in-store.', 
                imgSrc: 'https://cdn.shopify.com/s/files/1/0818/1304/5566/files/AppleCare_iPhone_PDP_Image_Position-1_Update24__en-US.jpg?v=1726003889&width=256' 
            })
        }
    };
    setProductAppleCare();
    
    return (
        <div>
            <h1 className='pt-8'>Peace of mind with AppleCare+</h1>
            <Slide>
                {productsAppleCare.map((product) => (
                    <div
                        key={product.id}
                        className="flex-shrink-0 ml-6 py-7"
                    >
                        <CardDetailItem item={product}></CardDetailItem>
                    </div>
                ))}
            </Slide>
        </div>
    );
};

export default PeaceOfMindWithAppleCare;

