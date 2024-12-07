import React from "react";
import { FontAwesomeIcon as Icon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

type IconWithContentProps = {
    item?: {
        icon: IconProp; // ประเภทของไอคอน
        title: string;
        detail: string;
    };
};
const IconWithContent : React.FC<IconWithContentProps> = ({ item }) => {
  if (!item) {
    return null;
  }

  return (
    <div className="flex flex-col justify-start text-center max-w-246px gap-1">
        <Icon className='text-3xl' icon={item.icon} />
        <h2 className='pt-4'>{item.title}</h2>
        <p className='min-h-20'>{item.detail}</p>
        <a className='pt-4 flex items-center gap-2 justify-center hover:opacity-50' href=' '>
            <p className='font-semibold text-btn-0071e3'>Learn more </p>
            <Icon icon={faChevronRight} className='text-xs text-btn-0071e3'></Icon>
        </a>
    </div>
  );
};

export default IconWithContent;
