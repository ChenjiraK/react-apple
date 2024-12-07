import { createSlice } from '@reduxjs/toolkit'
import { BannerModel } from '../model/BannerModel'
import { ProductCategoryModel } from '../model/ProductCategoryModel'
import { ProductModel } from '../model/ProductModel'
import { TextEditorModel } from '../model/TextEditorModel'
import { SupportServiceModel } from '../model/SupportServiceModel'
import { AllProductAppleModel } from '../model/AllProductAppleModel'
import { AssistModel } from '../model/AssistModel'
import { AppleCareModel } from '../model/AppleCareModel'
import ExampleHome from '../Json/ExampleHome.json';

interface HomeState {
    productApple: any | null; // You can replace `any` with a specific type if available
    banners: any[]; // Replace `any[]` with specific type (e.g., `BannerModel[]`)
    categories: any[];
    newProducts: any[];
    discoverServices: any[];
    highlightProducts: any[];
    productsCyberWeek: any[];
    storesSupport: any[];
    devicesTradeIn: any[];
    supports: any[];
    accessories: any[];
    assists: any[];
    productsAppleCare: any[];
    quickProducts: any[];
  }
const initialState:HomeState = {
    productApple: null,
    banners: [],
    categories: [],
    newProducts: [],
    discoverServices: [],
    highlightProducts: [],
    productsCyberWeek: [],
    storesSupport: [],
    devicesTradeIn: [],
    supports: [],
    accessories: [],
    assists: [],
    productsAppleCare: [],
    quickProducts: [],
};
export const homeStore = createSlice({
    name: 'Home',
    initialState,
    reducers: {
        getLanding: (state) => {
            const data = ExampleHome;
            for(const item of data.banners) {
                state.banners.push(new BannerModel(item).getDataApi());
            }
            for(const item of data.categories) {
                state.categories.push(new ProductCategoryModel(item).getDataApi());
            }
            for(const item of data.new_products) {
                state.newProducts.push(new ProductModel(item).getDataApi());
            }
            for(const item of data.discover_services) {
                state.discoverServices.push(new TextEditorModel(item).getDataApi())
            }
            for(const item of data.products_highlight) {
                state.highlightProducts.push(new ProductModel(item).getDataApi());
            }
            for(const item of data.shop_cyber_week) {
                state.productsCyberWeek.push(new ProductModel(item).getDataApi());
            }
            for(const item of data.view_in_stores) {
                state.storesSupport.push(new AppleCareModel(item).getDataApi());
            }
            for(const item of data.trade_in_devices) {
                state.devicesTradeIn.push(new ProductModel(item).getDataApi());
            }
            for(const item of data.support_services) {
                state.supports.push(new SupportServiceModel(item).getDataApi());
            }
            for(const item of data.apple_accessories) {
                state.accessories.push(new ProductModel(item).getDataApi());
            }
            for(const item of data.assists) {
                state.assists.push(new AssistModel(item).getDataApi());
            }
            for(const item of data.apple_cares) {
                state.productsAppleCare.push(new AppleCareModel(item).getDataApi());
            }
            for(const item of data.quick_checkout) {
                state.quickProducts.push(new ProductModel(item).getDataApi());
            }
            state.productApple = new AllProductAppleModel(data.all_of_apple).getDataApi();
        },
        clearData: (state) => {
            state.productApple = null;
            state.banners = [];
            state.categories = [];
            state.newProducts = [];
            state.discoverServices = [];
            state.highlightProducts = [];
            state.productsCyberWeek = [];
            state.storesSupport = [];
            state.devicesTradeIn = [];
            state.supports = [];
            state.accessories = [];
            state.assists = [];
            state.productsAppleCare = [];
            state.quickProducts = [];
        }
    },
});
export const { getLanding, clearData } = homeStore.actions;
export default homeStore.reducer;

