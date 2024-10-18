
import ExampleCategories from '../../Json/ExampleCategories.json';
import { CategoryListModel } from '../../model/CategoryModel';
import MenuDropdown from '../Input/MenuDropdown';

function TopbarMenu(){
    const datas = ExampleCategories;
    const barMenu = datas.categories.map((item) => new CategoryListModel(item));
    const otherMenu = [
        {
            id: 9,
            name: 'Stores',
            route: ''
        },
        {
            id: 10,
            name: 'Business',
            route: ''
        },
    ]
    return(
       <div className="flex justify-between">
           {barMenu.map((bar) => (
                <div key={`category_${bar.id}`}>
                    <MenuDropdown dropdownList={bar.subCategories} onChangeItem={(item) => console.log(item)}>
                        <p className="hover:underline hover:text-black">{bar.name}</p>
                    </MenuDropdown>
                </div>
            ))}
            <div className="h-7 border-l"></div>
            {otherMenu.map((other) => (
                <div className="cursor-pointer" key={`other_category_${other.id}`}>
                    <p>{other.name}</p>
                </div>
            ))}
       </div>
    )
}
export default TopbarMenu