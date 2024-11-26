import React, { useEffect } from 'react';
//component
import CategoryItem from "../components/Category/CategoryItem.jsx";
import CardDetailItem from '../components/Card/CardDetailItem.jsx';
import CardTextItem from '../components/Card/CardTextItem.jsx';
import CardThumbnailHorizonLeft from '../components/Card/CardThumbnailHorizonLeft.jsx';
import CardThumbnailVertical from '../components/Card/CardThumbnailVertical.jsx';
import CardProductItem from '../components/Card/CardProductItem.jsx';
import Slide from '../components/Layout/Slide.jsx';
import LoopSlide from '../components/Layout/LoopSlide.jsx';
import SlideBanner from "../components/SlideBanner.jsx";
import SlideCategory from '../components/SlideCategory.jsx';
import IconWithContent from '../components/Card/IconWithContent.jsx';
import SidemageWithContent from '../components/Card/SidemageWithContent.jsx';
//redux
import { useSelector, useDispatch } from 'react-redux';
import { getLanding, clearData } from "../redux/Home.js";

function Landing() {

    const dispatch = useDispatch();
    const { 
        banners,
        categories,
        newProducts,
        discoverServices,
        highlightProducts,
        productsCyberWeek,
        storesSupport,
        devicesTradeIn,
        supports,
        productApple,
        accessories,
        assists,
        productsAppleCare,
        quickProducts,
     } = useSelector((state) => state.home);

    useEffect(() => {
        /** clear data */
        dispatch(clearData());
        /** get data */
        dispatch(getLanding());

    }, [dispatch]);

    const ViewAllAppleProduct = () => {
        return (
            <div className="padding-slide mt-12">
                <h1 className="text-4xl font-semibold pl-8">View all Apple products.</h1>
                <Slide>
                    {categories.map((category) => (
                        <div
                            key={category.id}
                            className="flex-shrink-0 mx-5"
                        >
                            <CategoryItem key={category.id} item={category}></CategoryItem>
                        </div>
                    ))}
                </Slide>
            </div>
        )
    }
    const SeeWhatNew = () => {
        return (
            <div className="padding-slide">
                <h1 className="text-4xl font-semibold mt-6 pl-8">See what’s new.</h1>
                <Slide>
                    {newProducts.map((product) => (
                    <div
                        key={product.id}
                        className="flex-shrink-0 ml-6 py-7"
                    >
                        <CardDetailItem key={product.id} item={product}></CardDetailItem>
                    </div>
                    ))}
                </Slide>
            </div>
        );
        
    }
    const DiscoverServices = () => {
        return (
            <div className="padding-slide">
                <div className="text-4xl font-semibold mt-6 pl-5">Discover services and more.</div>
                <div>
                    <Slide>
                        {discoverServices.map((item,index) => (
                            <div
                            key={index}
                            className="flex-shrink-0 ml-4"
                            >
                            <CardTextItem item={item}></CardTextItem>
                            </div>
                        ))}
                    </Slide>
                </div>
            </div>
        )
    }
    const HightLightProduct = () => {
        const productItem = highlightProducts;
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
        
    }
    const CyperWeekProduct = () => {
        return (
            <div>
                <h1 className='text-center py-8'>Shop Cyber Week products August 1–4.</h1>
                <div className='flex justify-center'>
                    <LoopSlide items={productsCyberWeek}>
                        <CardProductItem />
                    </LoopSlide>
                </div>
            </div>
        )
        
    }
    const ViewInStoreClasses = () => {
        return (
            <div className="padding-slide">
                <h1 className="text-4xl font-semibold mt-6 pl-7">View in-store classes and support.</h1>
                <Slide>
                    {storesSupport.map((store) => (
                        <div
                            key={store.id}
                            className="flex-shrink-0 ml-6 pb-7"
                        >
                            <CardDetailItem key={store.id} item={store}></CardDetailItem>
                        </div>
                    ))}
                </Slide>
            </div>
        )
    }
    const TrandInDevice = () => {
        return (
            <div className='flex justify-center'>
                <div>
                    <h1 className='text-center py-5'>Trade-in your current device.</h1>
                    <div className='flex justify-center'>
                        <LoopSlide items={devicesTradeIn}>
                            <CardProductItem />
                        </LoopSlide>
                    </div>
                </div>
            </div>
        )
    }
    const SupportLearnMore = () => {
        return (
            <div className='flex justify-center py-6'>
                <div className='flex justify-around w-main-page'>
                    {supports.map(item=> (
                        <IconWithContent key={item.id} item={item} />
                    ))}
                </div>
            </div>
            
        )
        
    }
    const AllThingsIpad = () => {
        return (
            <div>
                <h1 className='text-center py-5'>{productApple.title}</h1>
                <div className='flex justify-center'>
                    <LoopSlide items={productApple.products}>
                        <CardProductItem />
                    </LoopSlide>
                </div>
            </div>
        )
    }
    const AppleAccessories = () => {
        return (
            <div className="padding-slide">
                <h1 className='pt-8 pl-7'>Featured Apple Accessories.</h1>
                <Slide>
                    {accessories.map((accessories) => (
                        <div
                            key={accessories.id}
                            className="flex-shrink-0 ml-6"
                        >
                            <CardDetailItem item={accessories}></CardDetailItem>
                        </div>
                    ))}
                </Slide>
            </div>
        )
    }
    const AssistantService = () => {
        return (
            <div className='flex justify-center py-7'>
                <div>
                    {assists.map((item, index) =>(
                        <div key={item.id} className="py-2">
                            <SidemageWithContent posistionImage={ index % 2 === 0 ? 'left' : 'right' } item={item} />
                        </div>
                    ))}
                </div>
            </div>
        )
    }
    const AppleCare = () => {
        return (
            <div className="padding-slide">
                <h1 className='pl-7'>Peace of mind with AppleCare+</h1>
                <Slide>
                    {productsAppleCare.map((product) => (
                        <div
                            key={product.id}
                            className="flex-shrink-0 ml-6 pb-7"
                        >
                            <CardDetailItem item={product}></CardDetailItem>
                        </div>
                    ))}
                </Slide>
            </div>
        )
    }
    const QuickCheckout = () => {
        return (
            <div>
                <h1 className='text-center py-8'>Quick checkout.</h1>
                <div className='flex justify-center'>
                    <LoopSlide items={quickProducts}>
                        <CardProductItem />
                    </LoopSlide>
                </div>
            </div>
        )
    }
    return(
        <div>
            <SlideBanner bannerList={banners} />
            <ViewAllAppleProduct />
            <hr className='my-5'/>
            <SeeWhatNew />
            <hr className='my-5'/>
            <DiscoverServices />
            <hr className='my-5'/>
            <div className="flex justify-center bg-gray-100 min-h-40">
                <HightLightProduct />
            </div>
            <hr className='my-5'/>
            <CyperWeekProduct />
            <hr className='my-5'/>
            <ViewInStoreClasses />
            <hr className='my-5'/>
            <TrandInDevice />
            <hr className='my-5'/>
            <SupportLearnMore />
            <hr className='my-5'/>
            {productApple && <AllThingsIpad />}
            
            <hr className='my-5'/>
            <AppleAccessories />
            <hr className='my-5'/>
            <AssistantService />
            <hr className='my-5'/>x
            <AppleCare />
            <hr className='my-5'/>
            <QuickCheckout />
        </div>
    )
}
export default Landing;