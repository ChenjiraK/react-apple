import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
//component
import SlideCategory from '../components/SlideCategory';
import SlideBanner from "../components/SlideBanner";
//redux
import { useSelector, useDispatch } from 'react-redux';
import { getProductByType, getCategoryLevel1, clearData } from "../redux/ProductLOB";
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
        dispatch(getCategoryLevel1());
    }, [dispatch, slug]);

    return (
        <div>
            <SlideCategory items={categories} />
            <SlideBanner bannerList={banners} />
        </div>
    )
}
export default LOBPage;