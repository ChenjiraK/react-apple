import BadgeLabel from './Label/BadgeLabel.jsx';
import Slide from './Layout/Slide';

const SlideCategory = ({ categoryItems = [] }) => {
  return (
    <div>
      <Slide positionCss='justify-center'>
        {categoryItems.map((category) => (
            <div
                key={category.id}
                className="flex-shrink-0 mx-5"
            >
                <div className="flex">
                    <div className='w-[84px] h-[84px]'>
                        <img className='h-full' src={category.imgSrc} alt="category_image" />
                    </div>
                    <div>
                        <BadgeLabel text={category.badgeLabel} color={category.badgeColor ? `${category.badgeColor}` : null}></BadgeLabel>
                    </div>
                </div>
            </div>
        ))}
      </Slide>
    </div>
  );
};
export default SlideCategory;