import SlideBanner from '../components/SlideBanner'
import SlideCategory from '../components/SlideCategory'
import SlideNewProduct from '../components/SlideNewProduct'
import SlideDiscoverServices from '../components/SlideDiscoverServices'
import RecommendProduct from '../components/RecommendProduct'
import ProductsShopCyberWeek from '../components/ProductsShopCyberWeek'
import ViewInStore from '../components/ViewInStore'
import TradeInCurrentDevice from '../components/TradeInCurrentDevice'
import LearnMoreService from '../components/LearnMoreService';
import AllThingsIpad from '../components/AllThingsIpad'
import FeatureAppleAccessories from '../components/FeatureAppleAccessories.jsx'
import Assistant from '../components/Assistant'
import PeaceOfMindWithAppleCare from '../components/PeaceofMindWithAppleCare.jsx'
import QuickCheckout from '../components/QuickCheckout.jsx'

function Landing() {
    return(
        <div>
            <SlideBanner />
            <div className='flex justify-center'>
                <div className='mt-10'>
                    <SlideCategory />
                    <hr className='my-5'/>
                    <SlideNewProduct />
                    <hr className='my-5'/>
                    <SlideDiscoverServices />
                    <hr className='my-5'/>
                </div>
            </div>
            <div className='bg-gray-100 min-h-40'>
                <div className=''>
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
            <FeatureAppleAccessories />
            <hr className='my-5'/>
            <Assistant />
            <hr className='my-5'/>
            <PeaceOfMindWithAppleCare />
            <hr className='my-5'/>
            <QuickCheckout />
        </div>
    )
}
export default Landing;