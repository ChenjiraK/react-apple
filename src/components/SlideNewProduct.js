import CardDetailItem from "./Card/CardDetailItem";
import Slide from './Layout/Slide';

const SlideProduct = () => {
  const productItems = [
    { id: 'product_1', badgeLabel: 'NEW' ,name: 'MacBook Air M3', detail:'Lean. Mean. M3 machine.', price: '$5199', imgSrc: 'https://cdn.shopify.com/s/files/1/0818/1304/5566/files/MacBook_Air_15-in_M3_Chip_Midnight_Hero_Horizontal_Screen__USEN.jpg?v=1709561887&width=256' },
    { id: 'product_3', badgeLabel: 'NEW' ,name: 'Watch Accessories', detail:'Shop watch accessories.', price: '$5025', imgSrc: 'https://cdn.shopify.com/s/files/1/0818/1304/5566/files/What_s_New_Watch-Accessories.png?v=1695309067&width=256' },
    { id: 'product_4', badgeLabel: 'NEW' ,name: 'iPhone Accessories', detail:'Shop iPhone accessories.', price: '$5059', imgSrc: 'https://cdn.shopify.com/s/files/1/0818/1304/5566/files/iphone-15-silicone-case-with-magsafe-pink_MWN93_AV1_26f2e0aa-851c-4f55-9edc-b590f82db638.png?v=1709585453&width=256' },
    { id: 'product_5', badgeLabel: 'NEW' ,name: 'iPad Accessories', detail:'Shop iPad accessories', price: '$5099', imgSrc: 'https://cdn.shopify.com/s/files/1/0818/1304/5566/files/iPad_Pro_13-inch_M4_Chip_Wi-Fi_Magic_Keyboard_Pro_Apple_Pencil_Pro_Hero_Horizontal_Screen__USEN.png?v=1715100290&width=256' },
    { id: 'product_6', badgeLabel: 'NEW' ,name: 'Apple Pencil Pro', detail:'Shop Apple Pencil Pro.', price: '$5129', imgSrc: 'https://cdn.shopify.com/s/files/1/0818/1304/5566/files/Apple_Pencil_Pro_PDP_Image_Position-2__en-US.png?v=1715101422&width=256' },
    { id: 'product_7', badgeLabel: 'NEW' ,name: 'iPad Air M2', detail:'Fresh Air.', price: ' From $5599', imgSrc: 'https://cdn.shopify.com/s/files/1/0818/1304/5566/files/iPad_Air_M2_Chip_Cellular_Hero_Vertical_Screen__USEN.png?v=1715100498&width=256' },
    { id: 'product_8', badgeLabel: 'NEW' ,name: 'iPad Pro M4', detail:'Thinpossible', price: 'From $5999', imgSrc: 'https://www.appstaging.dev/cdn/shop/files/iPad_Pro_13-inch_M4_Chip_Cellular_Hero_Vertical_Screen__USEN.png?v=1715099322&width=256' },
  ];
  return (
    <div>
      <div className="text-4xl font-semibold pl-9 mt-6">See what’s new.</div>
      <Slide>
        {productItems.map((product) => (
          <div
            key={product.id}
            className="flex-shrink-0 ml-6"
          >
            <CardDetailItem key={product.id} item={product}></CardDetailItem>
          </div>
        ))}
      </Slide>
    </div>
  );
};
export default SlideProduct;