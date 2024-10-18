
import { BadgeModel } from "./BadgeModel";
import Util from "../helper/Utility";

export class ProductModel {
    constructor(data = {}) {
        this.id = data.id || null;
        this.order = data.order || null;
        this.badges = data.badges?.map((item) => new BadgeModel(item));
        this.name = data.name || null;
        this.detail = data.detail || null;
        this.imgSrc = data.image_src || null;
        //price data
        this.unit = data.unit || null;
        this.price = data.price || null;
        this.originalPrice = data.original_price || null;
        this.discount = data.discount || null;
        this.discountPrice = data.discount_price || null;
        this.totalPrice = data.total_price || null;
        this.installment = data.installment || null;
    }
    getDataApi(){
        return Util.normalObject(this);
    }
}