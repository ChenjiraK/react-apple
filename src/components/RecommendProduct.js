import CardThumbnailVertical from './Card/CardThumbnailVertical'
import CardThumbnailHorizonLeft from './Card/CardThumbnailHorizonLeft';

const RecommendProduct = () => {
  const productItem = [
    {
      id: 'product_highlight_1',
      badgeLabel: 'NEW',
      badgeColor: '#bf4800',
      name: 'iPad Pro M4',
      detail: 'Thinpossible.',
      price: '$5999',
      imageSrc: 'https://www.appstaging.dev/cdn/shop/files/iPad_Pro_13-inch_M4_Chip_Cellular_Hero_Vertical_Screen__USEN.png?v=1715099322&width=550'
    },
    {
      id: 'product_highlight_2',
      badgeLabel: '',
      badgeColor: '',
      name: 'iPhone 15 Pr0',
      detail: 'Titanium.',
      price: '$5999',
      imageSrc: 'https://www.appstaging.dev/cdn/shop/files/iPhone_15_Pro_Max_TT.jpg?v=1701814949&width=550'
    },
    {
      id: 'product_highlight_3',
      badgeLabel: '',
      badgeColor: '',
      name: 'Apple Watch Series 9',
      detail: 'Smarter. Brighter. Mightier.',
      price: '$5399',
      imageSrc: 'https://www.appstaging.dev/cdn/shop/files/Apple_Watch_Series_9_Cellular_41mm_Silver_Aluminum_Storm_Blue_Sport_Band_34FR_Screen__USEN_daf0d6da-0906-4909-ba36-e312b34e9c39.png?v=1701815070&width=550'
    },
  ]
  const highlightProduct1 = productItem.length ? productItem[0] : null;
  const highlightProduct2 = productItem.length > 1 ? productItem[1] : null;
  const highlightProduct3 = productItem.length > 2 ? productItem[2] : null;
  return (
    <div className='p-5'>
        <div>
            <div className="grid grid-rows-2 grid-flow-col gap-4">
                {highlightProduct1 &&
                    <div className="row-span-2 h-602px">
                        <CardThumbnailVertical item={highlightProduct1} />
                    </div>
                }
                {highlightProduct2 &&
                    <div className="col-span-1 h-294px">
                        <CardThumbnailHorizonLeft item={highlightProduct2} />
                    </div>
                }
                {highlightProduct3 &&
                    <div className="row-span-1 h-294px">
                        <CardThumbnailHorizonLeft item={highlightProduct3} />
                    </div>
                }
            </div>
        </div>
    </div>
  );
};

export default RecommendProduct;
