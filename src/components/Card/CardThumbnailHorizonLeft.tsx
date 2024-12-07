import MainButton from "../Button/MainButton";
import BadgeLabel from "../Label/BadgeLabel";

type CardThumbnailHorizonLeftProps = {
    item?: {
        imgSrc: string;
        name: string;
        badgeLabel: string;
        badgeColor: string;
        detail: string;
        price: string | number
    };
};

const CardThumbnailHorizonLeft : React.FC<CardThumbnailHorizonLeftProps> = ({ item }) => {
    if (!item) {
        return null;
    }
    const styleWidthImage = {
        width: '235px',
        height: '200px'
    }
    function onClickByNow() {
        console.log('on click buy now');
    }
    return (
        <div className='bg-white flex justify-center p-6 shadow-sm h-full'>
            <div className='grid grid-cols-2'>
                <div className="flex justify-center" style={styleWidthImage}>
                    <img className="h-full" src={item.imgSrc} alt={item.name} />
                </div>
                <div className="flex justify-center">
                    <div className="text-center self-center">
                        <BadgeLabel text={item.badgeLabel} color={item.badgeColor}></BadgeLabel>
                        <h2>{item.name}</h2>
                        <p className='text-sm'>{item.detail}</p>
                        <p className='text-sm pb-4'>From {item.price}</p>
                        <MainButton onClick={onClickByNow}>Buy Now</MainButton>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CardThumbnailHorizonLeft;
