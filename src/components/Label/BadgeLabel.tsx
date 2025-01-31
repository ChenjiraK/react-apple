
import React from "react";
type BadgeLabelProps = {
    text: string | null;
    color: string;
    textClass?: string;
};

const BadgeLabel: React.FC<BadgeLabelProps> = ({ text = '', color = '#bf4800', textClass='text-xs' }) => {
    let badgeColor = color;
    if(!color) {
        badgeColor = '#bf4800'
    }
    const colorStyle = {
        color: `${badgeColor}`,
    };
    return (
        <p className={`font-semibold ${textClass}`} style={colorStyle}>{text}</p>
    );
  };
  
export default BadgeLabel;