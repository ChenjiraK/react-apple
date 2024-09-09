import LoopSlide from './Layout/LoopSlide'
import CardProductsItem from "./Card/CardProductItem";

const ProductsShopCyberWeek = () => {
  const productItem = [
    {
        id: 'product_week_1',
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
        badgeLabel: 'NEW',
        badgeColor: '#bf4800',
        name: '2021 10.2-inch iPad',
        originalPrice: '$5,399.00 USD',
        discount: null,
        totalPrice: null,
        installment: '$771.28/mo. for 7 mo.',
        imageSrc: 'https://cdn.shopify.com/s/files/1/0818/1304/5566/files/IMG-9021287_26dbd499-660f-40fd-a1cc-b83320369375_533x.jpg?v=1713382279'
    },
    {
        id: 'product_week_1',
        badgeLabel: 'NEW',
        badgeColor: '#bf4800',
        name: '',
        originalPrice: '',
        discount: '',
        totalPrice: '',
        installment: '',
        imageSrc: ''
    },
    {
        id: 'product_week_3',
        badgeLabel: 'NEW',
        badgeColor: '#bf4800',
        name: '',
        originalPrice: '',
        discount: '',
        totalPrice: '',
        installment: '',
        imageSrc: ''
    },
    {
        id: 'product_week_4',
        badgeLabel: 'NEW',
        badgeColor: '#bf4800',
        name: '',
        originalPrice: '',
        discount: '',
        totalPrice: '',
        installment: '',
        imageSrc: ''
    },
  ]
  return (
    <div>
        <LoopSlide>
            <CardProductsItem />
        </LoopSlide>
    </div>
  );
};

export default ProductsShopCyberWeek;
