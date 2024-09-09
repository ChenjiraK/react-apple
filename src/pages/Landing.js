import Header from '../components/Layout/Header'
import SlideBanner from '../components/SlideBanner'
import SlideCategory from '../components/SlideCategory'
import SlideProduct from '../components/SlideNewProduct'
import SlideDiscoverServices from '../components/SlideDiscoverServices'
import RecommendProduct from '../components/RecommendProduct'
import ProductsShopCyberWeek from '../components/ProductsShopCyberWeek'
function Landing() {
    return(
        <div>
            <Header />
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
        </div>
    )
}
export default Landing;