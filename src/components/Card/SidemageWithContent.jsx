import MainOutlineButton from '../Button/MainOutlineButton'

const SidemageWithContent = ({ item, posistionImage = 'left' }) => {
  if (!item) {
    return null;
  }

  return (
    <div className="grid grid-cols-2 rounded-lg bg-gray-f2f2f2">
        {posistionImage === 'left' && 
            <div dir="ltr" className='w-610px h-366px justify-self-end'>
                <img className='w-auto h-full rounded-s-lg' src={item.imgSrc} alt={item.title} />
            </div>
        }
        <div className="flex flex-col text-center items-center gap-2 self-center">
            <h1>{item.title}</h1>
            <p>{item.detail}</p>
            <div className='w-36 mt-5'>
                <MainOutlineButton>{item.btnText}</MainOutlineButton>
            </div>
        </div>
        {posistionImage === 'right' && 
            <div dir="rtl" className='w-610px h-366px justify-self-end'>
                <img className='w-auto h-full rounded-s-lg' src={item.imgSrc} alt={item.title} />
            </div>
        }
    </div>
  );
};

export default SidemageWithContent;
