import React, { useState, useEffect } from 'react';
import { emits } from '../../helper/EmitData';
import Util from '../../helper/Utility';

type InputTextHoverProps = {
   label?: string;
   type?: string;
   isError?: boolean;
   errorMsg?: string;
   maxLength?:number;
   onChange: (value: string) => void;
};

const InputTextHover: React.FC<InputTextHoverProps> = ({
   label = 'Label',
   type = 'text',
   isError = false,
   errorMsg = '',
   maxLength,
   onChange,
}) => {
   const [isFocused, setIsFocused] = useState(false);
   const [inputValue, setValue] = useState('');
   const [isErrorState, setErrorState] = useState<boolean>(isError);

   // ใช้ useEffect เพื่อตรวจสอบการเปลี่ยนแปลงของ props
   useEffect(() => {
      setErrorState(isError);
   }, [isError]); // ทำงานเมื่อ props เปลี่ยน


   function onChangeInput(e: React.ChangeEvent<HTMLInputElement>) {
      let value = e.target.value;
      if(value && type === 'tel') {
         value = value.replace(/^[^0].*/, '')
         value = Util.removeNotNumber(value)
      }
      setErrorState(false)
      setValue(value);
      emits(onChange, value);
   }

   return (
      <div className="relative">
         <input
            type={type}
            value={inputValue}
            onChange={onChangeInput}
            maxLength={maxLength}
            className={`block w-full px-4 border h-11 rounded-md text-16 ${
               isFocused ? 'border-black' : 'border-gray-300'
            } ${inputValue ? 'pt-4' : ''} ${isErrorState ? 'border-red-600' : ''}`}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
         />
         <label
            className={`absolute left-4 text-gray-500 transition-all duration-300 ${isFocused || inputValue ? 'top-[2px] text-xs' : 'top-3 text-md'}`}
         >
            {label}
         </label>
         {isErrorState && <div className="text-xs text-red-600">{errorMsg}</div>}
      </div>
   );
};

export default InputTextHover;
