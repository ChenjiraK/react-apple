import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';
import MenuDropdown from '../Input/MenuDropdown.jsx';
import React, { useState } from "react";

function SwitchLanguage(){
    const [ currentLang , setCurrentLang ] = useState('English');
    const [ isShowDropdown, setIsShowDropdown ] = useState(false);
    const lang = [
        {
            value: 'en',
            text: 'English',
        },
        {
            value: 'th',
            text: 'Thai',
        }
    ];

    const changeLocale = (item) => {
        setCurrentLang(item.text)
    }
    const onClickLang = (status) => {
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
                        <Icon icon="fa-solid fa-chevron-up" className='self-center mx-3 text-xs' /> 
                        : <Icon icon="fa-solid fa-chevron-down" className='self-center mx-3 text-xs' />}
                    </div>
            </MenuDropdown>
       </div>
    )
  }
export default SwitchLanguage