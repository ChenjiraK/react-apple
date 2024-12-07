
import { BadgeModel } from "./BadgeModel";
import Util from "../helper/Utility";

export class ProductModel {
    id: string | number
    order: number
    badges: BadgeModel[]
    name: string
    detail: string
    imgSrc: string
    unit: string | null
    price: number
    originalPrice: number
    discount: number
    discountPrice: number
    totalPrice: number
    installment: string | null
    constructor(data:any = {}) {
        this.id = data.id || null;
        this.order = data.order || 0;
        this.badges = data.badges?.map((item:any) => new BadgeModel(item));
        this.name = data.name || '';
        this.detail = data.detail || '';
        this.imgSrc = data.image_src || '';
        //price data
        this.unit = data.unit || null;
        this.price = data.price || null;
        this.originalPrice = data.original_price || 0;
        this.discount = data.discount || 0;
        this.discountPrice = data.discount_price || 0;
        this.totalPrice = data.total_price || 0;
        this.installment = data.installment || null;
    }
    getDataApi(){
        return Util.normalObject(this);
    }
}