import MainButton from "../Button/MainButton";
import BadgeLabel from "../Label/BadgeLabel";
const CardThumbnail = ({ item, positionImage = 'bottom'}) => {
    if (!item) {
        return null;
      }
    const styleVerticalImage = {
        width: '362px',
        height: '362px'
    }
    const styleHorizonImage = {
        width: '235px',
        height: '200px'
    }
    return (
        <div className='bg-white flex justify-center p-6 shadow-sm'>
            <div className='flex flex-col'>
                <div className="text-center">
                    <BadgeLabel text={'NEW'}></BadgeLabel>
                    <h3>iPad Pro M4</h3>
                    <p className='text-sm'>Thinpossible.</p>
                    <p className='text-sm pb-4'>From $5999</p>
                <MainButton>Buy Now</MainButton>
                <div style={styleVerticalImage}>
                    <img className="object-contain" src='https://www.appstaging.dev/cdn/shop/files/iPad_Pro_13-inch_M4_Chip_Cellular_Hero_Vertical_Screen__USEN.png?v=1715099322&width=550' />
                </div>
                </div>
                <div></div>
            </div>
        </div>
    );
};

export default CardThumbnail;
