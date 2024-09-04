import CategoryItem from "./Category/CategoryItem";
import Slide from './Layout/Slide';

const SlideCategory = () => {
  const categoryItems = [
    { id: 'cat_1', title: 'Mac', price: '$5199', imgSrc: 'https://www.appstaging.dev/cdn/shop/files/mac_9dbb5d65-8ce8-4515-b0ea-29624f76c18b_1.png?v=1701794541' },
    { id: 'cat_2', title: 'iPhone', price: '$5799', imgSrc: 'https://www.appstaging.dev/cdn/shop/files/2.LOB-iPhone_0fb05017-ff20-42a7-a778-6442d40c10db.png?v=1701796526' },
    { id: 'cat_3', title: 'iPad', price: '$5599', imgSrc: 'https://www.appstaging.dev/cdn/shop/files/lob-stripe-Ipad-050724-2.png?v=1715098480' },
    { id: 'cat_4', title: 'Watch', price: '$5799', imgSrc: 'https://www.appstaging.dev/cdn/shop/files/4.LOB-Watch.png?v=1695308897&width=90//www.appstaging.dev/cdn/shop/files/4.LOB-Watch.png?v=1695308897&width=180//www.appstaging.dev/cdn/shop/files/4.LOB-Watch.png?v=1695308897&width=375//www.appstaging.dev/cdn/shop/files/4.LOB-Watch.png?v=1695308897&width=400' },
    { id: 'cat_5', title: 'Music', price: '$5169', imgSrc: 'https://www.appstaging.dev/cdn/shop/files/5.LOB-Music.png?v=1695308897&width=90//www.appstaging.dev/cdn/shop/files/5.LOB-Music.png?v=1695308897&width=180//www.appstaging.dev/cdn/shop/files/5.LOB-Music.png?v=1695308897&width=375//www.appstaging.dev/cdn/shop/files/5.LOB-Music.png?v=1695308897&width=400' },
    { id: 'cat_6', title: 'TV & Home', price: '$5129', imgSrc: 'https://www.appstaging.dev/cdn/shop/files/6.LOB-TV_Home.png?v=1695308897' },
    { id: 'cat_7', title: 'Accessories', price: '$5029', imgSrc: 'https://www.appstaging.dev/cdn/shop/files/accessories-iphone.png?v=1709565246' },
    { id: 'cat_8', title: 'Entertainment', price: 'See offers', imgSrc: 'https://www.appstaging.dev/cdn/shop/files/8.LOB-Entertainment.png?v=1695308897' },
    { id: 'cat_9', title: 'Airtag', price: '$5029', imgSrc: 'https://www.appstaging.dev/cdn/shop/files/9.LOB-AirTag.png?v=1695308897' },

    { id: 'cat_11', title: 'Mac', price: '$5199', imgSrc: 'https://www.appstaging.dev/cdn/shop/files/mac_9dbb5d65-8ce8-4515-b0ea-29624f76c18b_1.png?v=1701794541' },
    { id: 'cat_21', title: 'iPhone', price: '$5799', imgSrc: 'https://www.appstaging.dev/cdn/shop/files/2.LOB-iPhone_0fb05017-ff20-42a7-a778-6442d40c10db.png?v=1701796526' },
    { id: 'cat_31', title: 'iPad', price: '$5599', imgSrc: 'https://www.appstaging.dev/cdn/shop/files/lob-stripe-Ipad-050724-2.png?v=1715098480' },
    { id: 'cat_41', title: 'Watch', price: '$5799', imgSrc: 'https://www.appstaging.dev/cdn/shop/files/4.LOB-Watch.png?v=1695308897&width=90//www.appstaging.dev/cdn/shop/files/4.LOB-Watch.png?v=1695308897&width=180//www.appstaging.dev/cdn/shop/files/4.LOB-Watch.png?v=1695308897&width=375//www.appstaging.dev/cdn/shop/files/4.LOB-Watch.png?v=1695308897&width=400' },
    { id: 'cat_51', title: 'Music', price: '$5169', imgSrc: 'https://www.appstaging.dev/cdn/shop/files/5.LOB-Music.png?v=1695308897&width=90//www.appstaging.dev/cdn/shop/files/5.LOB-Music.png?v=1695308897&width=180//www.appstaging.dev/cdn/shop/files/5.LOB-Music.png?v=1695308897&width=375//www.appstaging.dev/cdn/shop/files/5.LOB-Music.png?v=1695308897&width=400' },
    { id: 'cat_61', title: 'TV & Home', price: '$5129', imgSrc: 'https://www.appstaging.dev/cdn/shop/files/6.LOB-TV_Home.png?v=1695308897' },
    { id: 'cat_71', title: 'Accessories', price: '$5029', imgSrc: 'https://www.appstaging.dev/cdn/shop/files/accessories-iphone.png?v=1709565246' },
    { id: 'cat_81', title: 'Entertainment', price: 'See offers', imgSrc: 'https://www.appstaging.dev/cdn/shop/files/8.LOB-Entertainment.png?v=1695308897' },
    { id: 'cat_91', title: 'Airtag', price: '$5029', imgSrc: 'https://www.appstaging.dev/cdn/shop/files/9.LOB-AirTag.png?v=1695308897' },
  ];
  return (
    <div>
      <div className="text-4xl font-semibold pl-9">View all Apple products.</div>
      <Slide>
        {categoryItems.map((category) => (
          <div
            key={category.id}
            className="flex-shrink-0 ml-5"
          >
            <CategoryItem key={category.id} item={category}></CategoryItem>
          </div>
        ))}
      </Slide>
    </div>
  );
};
export default SlideCategory;