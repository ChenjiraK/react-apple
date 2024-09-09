import BadgeLabel from "../Label/BadgeLabel";
import MainButton from "../Button/MainButton";

const CardProductsItem = () => {
  return (
    <div className="max-w-294px text-center">
        <div className="border border-gray-400 rounded-lg w-full h-full max-h-294px max-w-294px mb-2 p-4">
            <img className="w-full h-full" src="https://cdn.shopify.com/s/files/1/0818/1304/5566/files/IMG-13087521_ab743aaf-ef10-46aa-a6d2-e78039b8323d_533x.jpg?v=1715112319" alt="product-name" />
        </div>
        <BadgeLabel text={'NEW'} />
        <p className="text-base text-ellipsis overflow-hidden font-semibold h-11">2024 Apple Pencil Pro</p>
        <p className="text-base">$5,129.00 USD</p>
        <p className="text-base mb-2">$757/mo. for 7 mo.</p>
        <MainButton>Buy now</MainButton>
    </div>
  );
};

export default CardProductsItem;
