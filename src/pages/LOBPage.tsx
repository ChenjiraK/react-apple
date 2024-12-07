import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
//component
// import SlideCategory from '../components/SlideCategory';
import SlideBanner from "../components/SlideBanner";
//redux
import { useSelector, useDispatch } from 'react-redux';
import { getProductByType, getCategoryType, clearData } from "../redux/ProductLOB";
import { AppDispatch, RootState } from '../redux/Store';

function LOBPage() {
    const { slug } = useParams();
    const dispatch: AppDispatch = useDispatch();
    const { 
        banners,
        categories,
        // productLOB,
     } = useSelector((state: RootState) => state.productLOB);

    useEffect(() => {
        dispatch(clearData());
        dispatch(getProductByType({ type: slug }));
        dispatch(getCategoryType({ type: slug }));
    }, [dispatch, slug]);

    console.log(categories);

    return (
        <div>
            {/* <SlideCategory categoryItems={categories} /> */}
            <SlideBanner bannerList={banners} />
        </div>
    )
}
export default LOBPage;