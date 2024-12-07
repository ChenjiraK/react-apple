import Util from "../helper/Utility";

export class ProductCategoryModel {
    id: string | number
    imgSrc: string
    title: string
    price: number
    otherPrice: number
    unit: string
    constructor(data:any = {}) {
        this.id = data.id;
        this.imgSrc = data.image_src ?? '';
        this.title = data.title ?? '';
        this.price = data.price ?? 0;
        this.otherPrice = data.other_price ?? 0;
        this.unit = data.unit ?? '';
    }
    getDataApi(){
        return Util.normalObject(this);
    }
}