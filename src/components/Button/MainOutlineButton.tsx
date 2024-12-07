import React, { ReactNode } from "react";
import { emits } from "../../helper/EmitData";
type MainOutlineButtonProps = {
    children: ReactNode; // ประเภทสำหรับ children
    onClick: () => void; // ประเภทสำหรับฟังก์ชัน onClick
};

const MainOutlineButton : React.FC<MainOutlineButtonProps> = ({ children, onClick }) => {
    return (
      <button className='rounded-full bg-transparent p-3 w-full text-btn-0071e3 border border-btn-0071e3 text-sm font-semibold' 
        onClick={() => emits(onClick, null)}>
            {/* slot */}
            {children}
      </button>
    );
  };
  
export default MainOutlineButton;