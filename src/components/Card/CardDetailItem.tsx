import BadgeLabel from "../Label/BadgeLabel";

type CardDetailItemProps = {
  item?: {
    imgSrc: string;
    badgeLabel: string;
    badgeColor: string;
    name: string;
    detail: string;
    detail2?: string;
  };
};
const CardDetailItem : React.FC<CardDetailItemProps> = ({ item }) => {
  if (!item) {
    return null;
  }

  return (
      <div className='p-4 rounded-2xl bg-white shadow-main w-288px h-390px text-gray-121212 mx-1'>
            <div className='flex justify-center w-full h-44'>
                <img className='object-contain' src={item.imgSrc} alt='example' />
            </div>
            <div className='flex flex-col gap-1 mt-2'>
                <BadgeLabel text={item.badgeLabel} color={item.badgeColor}></BadgeLabel>
                <h2 className="text-black">{item.name}</h2>
                <p className='text-sm h-10 font-semibold'>{item.detail}</p>
                <p className='text-sm h-full'>{item.detail2}</p>
            </div>
      </div>
  );
};

export default CardDetailItem;
