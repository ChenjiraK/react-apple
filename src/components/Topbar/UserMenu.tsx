import React, { useState } from "react";
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import MenuDropdown from '../Input/MenuDropdown';
import { IDropdownItem } from "@/types/IDropdown";

const SwitchLanguage : React.FC = () => {
    const [ currentLang , setCurrentLang ] = useState('English');
    const [ isShowDropdown, setIsShowDropdown ] = useState(false);
    const lang: IDropdownItem[] = [
        {
            value: '/profile',
            text: 'English',
        },
        {
            value: 'th',
            text: 'Thai',
        }
    ];

    const changeLocale = (item: IDropdownItem) => {
        setCurrentLang(item.text)
    }
    const onClickLang = (status: boolean) => {
        setIsShowDropdown(status)
    }
    const onClickMenu = () => {
        console.log('onClickMenu')
    };
    
    return(
       <div>
            <MenuDropdown dropdownList={lang} 
               onChangeItem={changeLocale} 
               onClickDropdown={onClickMenu} 
               customClass={'w-32 right-0'}>
                  <Icon className="text-xl" icon={faUser} />
            </MenuDropdown>
       </div>
    )
  }
export default SwitchLanguage