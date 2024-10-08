import React, { useState, useRef } from "react";

function MenuDropdown({ children, dropdownList, onChangeItem, onClickDropdown , customClass = '' }){

    const [showList, setShowList] = useState(false);
    const elemDropdownBtn = useRef();
    const elemDDLListArea = useRef();

    const toggleDropdown = () => {
        if (showList) {
            closeDropdown();
        } else {
            openDropdown();
        }
        
        emits(onClickDropdown, showList);
    }
    const openDropdown = () => {
        setShowList(true);
        document.addEventListener('click', documentClick);
    }
    const closeDropdown = () => {
        setShowList(false)
        document.removeEventListener('click', documentClick);
    }
    const documentClick = (e) => {
        let el = elemDropdownBtn;
        var target = e.target;

        if (el !== target && !el.current.contains(target)) {
            closeDropdown();
        }
    }
    const clickSelectItem = (item) => {
        if(!item) return;
        emits(onChangeItem, item);
        closeDropdown();
    }
    const emits = (emitFunc, value) => {
        if (typeof emitFunc === 'function') {
            return emitFunc(value);
        } else {
            console.error('emits is not a function');
        }
    }
    const ListArea = () => {
        return (<>
            {showList && dropdownList &&
                <div ref={elemDDLListArea}
                    className={`absolute ${ customClass ? customClass : 'left-0 w-52' } bg-white top-7 border overflow-hidden z-10 `}>
                    <div className="min-h-fit overflow-y-auto hide-scroll py-2">
                        {dropdownList.map((item, index) => (
                            <div key={`dropdown_${index}`} className="py-2 px-4 cursor-pointer text-gray-121212" 
                                onClick={()=>{clickSelectItem(item)}}>
                                <p className="hover:underline hover:text-black">{item.text}</p>
                            </div>
                        ))}
                    </div>
                </div>
            }
        </>)
    }
    return(
        <div className="relative inline-block text-left" ref={elemDropdownBtn}>
            <div className="cursor-pointer text-gray-121212" onClick={()=>{toggleDropdown()}}>
                {children}
            </div>
            <ListArea />
        </div>
    )
  }
export default MenuDropdown