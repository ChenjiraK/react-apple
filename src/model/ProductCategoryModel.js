import Util from "../helper/Utility";

export class ProductCategoryModel {
    constructor(data = {}) {
        this.id = data.id ?? null;
        this.imgSrc = data.image_src ?? null;
        this.title = data.title ?? null;
        this.price = data.price ?? 0;
        this.otherPrice = data.other_price ?? null;
        this.unit = data.unit ?? null;
    }
    getDataApi(){
        return Util.normalObject(this);
    }
}