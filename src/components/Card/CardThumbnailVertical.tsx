import MainButton from "../Button/MainButton";
import BadgeLabel from "../Label/BadgeLabel.tsx";

type CardThumbnailVerticalProps = {
    item?: {
        imgSrc: string;
        name: string;
        badgeLabel: string;
        badgeColor: string;
        detail: string;
        price: string | number
    };
};
const CardThumbnailVertical: React.FC<CardThumbnailVerticalProps> =({ item }) => {
    if (!item) {
        return null;
      }
    const styleWidthImage = {
        width: '362px',
        height: '362px'
    }
    function onClickByNow() {
        console.log('on click buy now');
    }
    return (
        <div className='bg-white flex justify-center p-6 shadow-sm h-full'>
            <div className='flex flex-col'>
                <div className="text-center">
                    <BadgeLabel text={item.badgeLabel} color={item.badgeColor}></BadgeLabel>
                    <h2>{item.name}</h2>
                    <p className='text-sm'>{item.detail}</p>
                    <p className='text-sm pb-4'>From {item.price}</p>
                    <MainButton onClick={onClickByNow}>Buy Now</MainButton>
                    <div style={styleWidthImage}>
                        <img className="h-full" src={item.imgSrc} alt={item.name} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CardThumbnailVertical;
