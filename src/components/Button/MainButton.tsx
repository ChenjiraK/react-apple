import React, { ReactNode } from "react";
import { emits } from "../../helper/EmitData";
type MainButtonProps = {
    children: ReactNode; // ประเภทสำหรับ children
    onClick: () => void; // ประเภทสำหรับฟังก์ชัน onClick
    customClass?: string | null
    disabled?: boolean
};

const MainButton : React.FC<MainButtonProps> = ({ 
  children, onClick, customClass ,disabled = false
}) => {
  function onClickBtn() {
    if(disabled) return;
    emits(onClick, null)
  }
  return (
    <button className={`rounded-full bg-btn-0071e3 hover:opacity-50 px-8 py-4 text-white text-sm font-semibold 
      ${customClass} ${ disabled ? 'opacity-50' : ''}`}
        onClick={() => onClickBtn()}>
            {children} {disabled}
    </button>
  );
};

export default MainButton;