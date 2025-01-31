import { createSlice } from '@reduxjs/toolkit'
//example json
import ExampleProductLOB from '../Json/ExampleProductLOB.json';
import ExampleProductPLP from '../Json/ExampleProductPLP.json';
//model
import { BannerModel } from '../model/BannerModel';
import { ProductModel } from '../model/ProductModel';

interface ProductLOPState {
    productLOB: any[],
    banners: any[],
    categories: any[]
}
const initialState: ProductLOPState = {
    productLOB: [],
    banners: [],
    categories: []
}
export const productLOBStore = createSlice({
    name: 'productLOB',
    initialState,
    reducers: {
        getProductByType: (state, action) => {
            const type = action.payload?.type ?? null
            const data = ExampleProductLOB.data;
            const products = data.items.filter((item) => item.category.toLowerCase() === type);
            const banners = data.banners.filter((item) => item.category.toLowerCase() === type);
            for(const product of products) {
                state.productLOB.push(new ProductModel(product).getDataApi());
            }
            for(const banner of banners) {
                state.banners.push(new BannerModel(banner).getDataApi());
            }
        },
        getCategoryType: (state, action) => {
            const type = action.payload?.type ?? null
            const dataLOB = ExampleProductLOB.data.items;
            const datasPLP = ExampleProductPLP.data;
            const productPLP = [];
            const productLOP = dataLOB.filter((item) => item.category.toLowerCase() === type);
            for(const data of datasPLP) {
                for(const item of data.items) {
                    if(item.category.toLowerCase() === type) {
                        productPLP.push(item)
                    }
                }
                
            }
            const products = [
                ...productPLP,
                ...productLOP,
            ]
            for(const product of products) {
                state.categories.push(new ProductModel(product).getDataApi());
            }
        },
        //mock data
        getCategoryLevel1: (state) => {
            let productObj = {
                image_src: "https://www.istudio.store/cdn/shop/files/FamilyStripe_MacBook_Air_13_in_m2_84x84_e6105e6a-b593-454a-8247-9ee12c3c1674.png?v=1697001540&width=84",
                name: "MacBook Air",
                price: 25000,
                currency: '฿',
                badges: [
                    {
                        "id": 1,
                        "badge_label": "NEW",
                        "badge_color": "#bf4800"
                    }
                ],
            }
            for(let i=0; i<10; i++) {
                state.categories.push(new ProductModel(productObj).getDataApi());
            }
        },

        clearData: (state) => {
            state.productLOB = [];
            state.banners = [];
            state.categories = [];
        }
    }
})
export const { 
    getProductByType ,
    getCategoryType, 
    getCategoryLevel1,
    clearData 
} = productLOBStore.actions;
export default productLOBStore.reducer;