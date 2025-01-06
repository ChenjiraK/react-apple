import React, { useState } from 'react';
import { FontAwesomeIcon as Icon } from "@fortawesome/react-fontawesome";
import { faAnglesDown } from '@fortawesome/free-solid-svg-icons';

type MenuExpandProps = {
   title: string,
   list: any
};

const CategoryItem : React.FC<MenuExpandProps> = ({ title, list = [] }) => {
   const [isExpanded, setIsExpanded] = useState<boolean>(false);
  return (
      <div className='border-y-1'>
         <div className='flex justify-between' onClick={() => setIsExpanded(!isExpanded)}>
            <div className='text-18 font-bold'>{title}</div>
            <div>
               <Icon className="self-center text-white" icon={faAnglesDown} />
            </div>
         </div>
         <div className={`overflow-hidden transition-all duration-300 ${
            isExpanded ? 'max-h-96' : 'h-0'
         }`}>
            {list.map((item:any, index:number) =>(
              <div key={`menu_dropdown_${index}`}>
                  {item.name}
              </div>
            ))}
         </div>
      </div>
  );
};

export default CategoryItem;
