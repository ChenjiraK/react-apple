import Header from '../components/Layout/Header'
import SlideBanner from '../components/SlideBanner'
import SlideCategory from '../components/SlideCategory';
import SlideProduct from '../components/SlideNewProduct';
import SlideDiscoverServices from '../components/SlideDiscoverServices'
import RecommendProduct from '../components/RecommendProduct'
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
                    <RecommendProduct />
                </div>
            </div>
        </div>
    )
}
export default Landing;