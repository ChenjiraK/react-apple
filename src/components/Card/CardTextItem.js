import BadgeLabel from "../Label/BadgeLabel";

const TextItem = ({ item }) => {
  if (!item) {
    return null;
  }

  return (
      <div className='p-4 border rounded-2xl bg-white shadow-md w-294px h-178px'>
         <BadgeLabel color={item.badgeColor} text={item.badgeLabel}></BadgeLabel>
        <div className='text-2xl text-black font-semibold pt-2' dangerouslySetInnerHTML={{ __html: item.text }}></div>
      </div>
  );
};

export default TextItem;
