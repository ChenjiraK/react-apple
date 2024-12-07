import React, { useState } from "react";
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';
import { faChevronUp , faChevronDown } from "@fortawesome/free-solid-svg-icons";
import MenuDropdown from '../Input/MenuDropdown.jsx';
import { IDropdownItem } from "@/types/IDropdown.js";

const SwitchLanguage : React.FC = () => {
    const [ currentLang , setCurrentLang ] = useState('English');
    const [ isShowDropdown, setIsShowDropdown ] = useState(false);
    const lang: IDropdownItem[] = [
        {
            value: 'en',
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
    
    return(
       <div>
            <MenuDropdown dropdownList={lang} 
                onChangeItem={changeLocale} 
                onClickDropdown={onClickLang} 
                customClass={'w-32 right-0'}>
                    <div className='flex cursor-pointer'>
                        <p className="hover:underline hover:text-black">{currentLang}</p>
                        {isShowDropdown ? 
                        <Icon icon={faChevronUp} className='self-center mx-3 text-xs' /> 
                        : <Icon icon={faChevronDown} className='self-center mx-3 text-xs' />}
                    </div>
            </MenuDropdown>
       </div>
    )
  }
export default SwitchLanguage