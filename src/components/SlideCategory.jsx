import CategoryItem from "./Category/CategoryItem";
import Slide from './Layout/Slide';

const SlideCategory = ({ categoryItems = [] }) => {
  return (
    <div>
      <div className="text-4xl font-semibold">View all Apple products.</div>
      <Slide>
        {categoryItems.map((category) => (
          <div
            key={category.id}
            className="flex-shrink-0 mx-5"
          >
            <CategoryItem key={category.id} item={category}></CategoryItem>
          </div>
        ))}
      </Slide>
    </div>
  );
};
export default SlideCategory;