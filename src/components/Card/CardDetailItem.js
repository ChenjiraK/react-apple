import BadgeLabel from "../Label/BadgeLabel";

const CardDetailItem = ({ item }) => {
  if (!item) {
    return null;
  }

  return (
      <div className='p-4 border rounded-2xl bg-white shadow-sm w-288px h-390px'>
            <div className='flex justify-center w-full h-44'>
                <img className='object-contain' src={item.imgSrc} alt='example' />
            </div>
            <div className='flex flex-col gap-1 mt-2'>
              <BadgeLabel text={item.badgeLabel}></BadgeLabel>
              <h2>{item.name}</h2>
              <p className='text-sm h-10 font-semibold'>{item.detail}</p>
              <p className='text-sm h-full'>From {item.price}</p>
            </div>
      </div>
  );
};

export default CardDetailItem;
