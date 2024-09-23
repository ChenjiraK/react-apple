import MainButton from "../Button/MainButton";
import BadgeLabel from "../Label/BadgeLabel";
const CardThumbnailVertical = ({ item }) => {
    if (!item) {
        return null;
      }
    const styleWidthImage = {
        width: '362px',
        height: '362px'
    }
    return (
        <div className='bg-white flex justify-center p-6 shadow-sm h-full'>
            <div className='flex flex-col'>
                <div className="text-center">
                    <BadgeLabel text={item.badgeLabel} color={item.badgeColor}></BadgeLabel>
                    <h2>{item.name}</h2>
                    <p className='text-sm'>{item.detail}</p>
                    <p className='text-sm pb-4'>From {item.price}</p>
                    <MainButton>Buy Now</MainButton>
                    <div style={styleWidthImage}>
                        <img className="h-full" src={item.imageSrc} alt={item.name} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CardThumbnailVertical;
