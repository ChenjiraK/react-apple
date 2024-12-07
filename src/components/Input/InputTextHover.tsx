import React, { useState } from "react";
import { emits } from '../../helper/EmitData';

type InputTextHoverProps = {
    label?: string;
    type?: string;
    onChange: (value: string) => void;
};

const InputTextHover : React.FC<InputTextHoverProps> = ({ label = 'Label', type = 'text', onChange }) => {
    const [isFocused, setIsFocused] = useState(false);
    const [inputValue, setValue] = useState("");
    
    function onChangeInput(e: React.ChangeEvent<HTMLInputElement>) {
        setValue(e.target.value);
        emits(onChange, e.target.value)
    }

    return (
        <div className="relative">
            <input
                type={type}
                value={inputValue}
                onChange={onChangeInput}
                className={`block w-full px-4 border h-11 rounded-md text-14 ${
                isFocused
                    ? "border-black"
                    : "border-gray-300"
                } ${inputValue ? "pt-4" : ""}`}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
            />
            <label className={`absolute left-4 text-gray-500 transition-all duration-300 ${isFocused || inputValue ? 'top-[2px] text-xs' : 'top-3 text-md'}`}>
                { label }
            </label>
        </div>
    );
};

export default InputTextHover;
