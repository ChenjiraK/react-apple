import React, { ReactNode } from "react";
import { emits } from "../../helper/EmitData";
type MainButtonProps = {
    children: ReactNode; // ประเภทสำหรับ children
    onClick: () => void; // ประเภทสำหรับฟังก์ชัน onClick
};

const MainButton : React.FC<MainButtonProps> = ({ children, onClick }) => {
  return (
    <button className='rounded-full bg-btn-0071e3 hover:opacity-50 px-8 py-4 text-white text-sm font-semibold' 
        onClick={() => emits(onClick, null)}>
            {children}
    </button>
  );
};

export default MainButton;