import { createSlice } from '@reduxjs/toolkit'
//example json
import ExampleProductLOB from '../Json/ExampleProductLOB.json';
import ExampleProductPLP from '../Json/ExampleProductPLP.json';
//model
import { BannerModel } from '../model/BannerModel';
import { ProductModel } from '../model/ProductModel';

const initialState = {
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

        clearData: (state) => {
            state.productLOB = [];
            state.banners = [];
            state.categories = [];
        }
    }
})
export const { getProductByType ,getCategoryType, clearData } = productLOBStore.actions;
export default productLOBStore.reducer;