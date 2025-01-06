import MainOutlineButton from '../Button/MainOutlineButton'

type SidemageWithContentProps = {
    item?: {
        imgSrc: string;
        title: string;
        detail: string;
        btnText: string,
    };
    posistionImage: string
};

const SidemageWithContent : React.FC<SidemageWithContentProps> =  ({ item, posistionImage = 'left' }) => {
    if (!item) {
        return null;
    }

    function onClickBtnText(){
        console.log('on click btn');
    }

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 rounded-lg bg-gray-f2f2f2">
            {posistionImage === 'left' && 
                <div dir="ltr">
                    <img className='w-full h-full rounded-t-xl sm:rounded-r-none sm:rounded-s-lg' src={item.imgSrc} alt={item.title} />
                </div>
            }
            <div className="flex flex-col text-center items-center gap-2 self-center py-7">
                <h1>{item.title}</h1>
                <p>{item.detail}</p>
                <div className='w-36 mt-5'>
                    <MainOutlineButton onClick={onClickBtnText}>{item.btnText}</MainOutlineButton>
                </div>
            </div>
            {posistionImage === 'right' && 
                <div dir="rtl">
                    <img className='w-full h-full rounded-s-lg' src={item.imgSrc} alt={item.title} />
                </div>
            }
        </div>
    );
};

export default SidemageWithContent;
