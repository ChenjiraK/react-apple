import BadgeLabel from "../Label/BadgeLabel";
import MainButton from "../Button/MainButton";

const CardProductItem = ({ item }) => {
  if (!item) {
    return null;
  }
  return (
    <div className="max-w-294px text-center">
        <div className="border border-gray-400 rounded-lg w-full h-full max-h-294px max-w-294px mb-2 p-4">
            <img className="w-full h-full" src={item.imgSrc} alt={item.name} />
        </div>
        <div className="flex justify-center gap-1">
            {item.badges.map((badge, index)=> (
              <BadgeLabel key={`badge_${index}`} text={badge.badgeLabel} color={badge.badgeColor} />
            ))}
        </div>
        <p className="text-base text-ellipsis overflow-hidden font-semibold h-11">{item.name}</p>
        <p className="text-base">{item.originalPrice}</p>
        <p className="text-base mb-2">{item.installment}</p>
        <MainButton>Buy now</MainButton>
    </div>
  );
};

export default CardProductItem;
