const BadgeLabel = ({ text, color = '#bf4800' }) => {
    const colorStyle = {
        color: `${color}`,
    };
    return (
        <p className='text-xs font-semibold' style={colorStyle}>{text}</p>
    );
  };
  
export default BadgeLabel;