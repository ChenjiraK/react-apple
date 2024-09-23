const BadgeLabel = ({ text, color = '#bf4800' }) => {
    let badgeColor = color;
    if(!color) {
        badgeColor = '#bf4800'
    }
    const colorStyle = {
        color: `${badgeColor}`,
    };
    return (
        <p className='text-xs font-semibold' style={colorStyle}>{text}</p>
    );
  };
  
export default BadgeLabel;