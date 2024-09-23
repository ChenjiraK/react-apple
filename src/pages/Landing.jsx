import SlideBanner from '../components/SlideBanner'
import SlideCategory from '../components/SlideCategory'
import SlideProduct from '../components/SlideNewProduct'
import SlideDiscoverServices from '../components/SlideDiscoverServices'
import RecommendProduct from '../components/RecommendProduct'
import ProductsShopCyberWeek from '../components/ProductsShopCyberWeek'
import ViewInStore from '../components/ViewInStore'
import TradeInCurrentDevice from '../components/TradeInCurrentDevice'
import LearnMoreService from '../components/LearnMoreService';
import AllThingsIpad from '../components/AllThingsIpad'
import Assistant from '../components/Assistant'

function Landing() {
    return(
        <div>
            <SlideBanner />
            <div className='flex justify-center mt-7'>
                <div>
                    <SlideCategory />
                    <hr className='my-5'/>
                    <SlideProduct />
                    <hr className='my-5'/>
                    <SlideDiscoverServices />
                    <hr className='my-5'/>
                </div>
            </div>
            <div className='bg-gray-100 min-h-40'>
                <div className='flex justify-center'>
                    <RecommendProduct />
                </div>
            </div>
            <ProductsShopCyberWeek />
            <hr className='my-5'/>
            <ViewInStore />
            <hr className='my-5'/>
            <TradeInCurrentDevice />
            <hr className='my-5'/>
            <LearnMoreService />
            <hr className='my-5'/>
            <AllThingsIpad />
            <hr className='my-5'/>
            <div className='flex justify-center'>
                <Assistant />
            </div>
        </div>
    )
}
export default Landing;