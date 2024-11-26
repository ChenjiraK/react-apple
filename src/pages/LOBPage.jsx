import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
//component
import SlideCategory from '../components/SlideCategory.jsx';
import SlideBanner from "../components/SlideBanner.jsx";
//redux
import { useSelector, useDispatch } from 'react-redux';
import { getProductByType, getCategoryType, clearData } from "../redux/ProductLOB";

function LOBPage() {
    const { slug } = useParams();
    const dispatch = useDispatch();
    const { 
        banners,
        categories,
        productLOB,
     } = useSelector((state) => state.productLOB);

    useEffect(() => {
        dispatch(clearData());
        dispatch(getProductByType({ type: slug }));
        dispatch(getCategoryType({ type: slug }));
    }, [dispatch, slug]);

    console.log(categories);

    return (
        <div>
            <SlideCategory categoryItems={categories} />
            <SlideBanner bannerList={banners} />
        </div>
    )
}
export default LOBPage;