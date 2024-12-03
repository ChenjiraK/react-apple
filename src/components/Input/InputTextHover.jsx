import React, { useState } from "react";

const InputTextHover = ({ label = 'Label', type = 'text' }) => {
  const [isFocused, setIsFocused] = useState(false);
  const [inputValue, setValue] = useState(""); // ใช้ state เก็บค่า input

  return (
    <div className="relative">
        <input 
            type={type}
            value={inputValue}
            onChange={(e) => setValue(e.target.value)}
            className={`block w-full px-4 border h-11 rounded-md text-sm ${
                isFocused ? "border-black" : "border-gray-300",
                inputValue ? "pt-6" : ""
              }`}
              onFocus={() => {
                setIsFocused(true);
              }}
              onBlur={() => {
                setIsFocused(false);
              }}
        />
        <label className={`absolute left-4 text-gray-500 transition-all duration-300 ${isFocused || inputValue ? 'top-[2px] text-xs' : 'top-3 text-md'}`}>
            { label }
        </label>
    </div>
  );
};

export default InputTextHover;
