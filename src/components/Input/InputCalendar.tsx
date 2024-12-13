import React, { useState } from 'react';
import { emits } from '../../helper/EmitData';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import '../../style/calendar.scss';
import dayjs from 'dayjs';

type InputTextHoverProps = {
   label?: string;
   type?: string;
   isError?: boolean;
   errorMsg?: string;
   onChange?: (value: string) => void;
};

type ValuePiece = Date | null;
type Value = ValuePiece | [ValuePiece, ValuePiece];

const InputCalendar: React.FC<InputTextHoverProps> = ({
   label = 'Label',
   type = 'text',
   isError = false,
   errorMsg = '',
   onChange,
}) => {
   const [isFocused, setIsFocused] = useState<boolean>(false);
   const [isShowCalendar, setIsShowCalendar] = useState<boolean>(false);
   const [dateValue, setDateValue] = useState<Value>(new Date());
   const [inputValue, setValue] = useState('');

   function changeDate(date: Value) {
      setDateValue(date);
      if (date) {
         const dateFormat = dayjs(date.toString()).format('DD MMMM YYYY');
         setValue(dateFormat);
         setIsShowCalendar(false);

         emits(onChange, dayjs(date.toString()).format('YYYY-MM-DD'))
      }
   }
   function onFocusInput() {
      setIsFocused(true);
      setIsShowCalendar(true);
   }

   return (
      <div className="relative">
         <input
            type={type}
            value={inputValue}
            readOnly
            className={`block w-full px-4 border h-11 rounded-md text-16 ${
               isFocused ? 'border-black' : 'border-gray-300'
            } ${inputValue ? 'pt-4' : ''} ${isError ? 'border-red-600' : ''}`}
            onFocus={() => onFocusInput()}
            onBlur={() => setIsFocused(false)}
         />
         <label
            className={`absolute left-4 text-gray-500 transition-all duration-300 ${isFocused || inputValue ? 'top-[2px] text-xs' : 'top-3 text-md'}`}
         >
            {label}
         </label>
         {isError && <div className="text-xs text-red-600">{errorMsg}</div>}
         {isShowCalendar && (
            <Calendar
               onChange={changeDate}
               value={dateValue}
               maxDate={new Date()}
            />
         )}
      </div>
   );
};

export default InputCalendar;
