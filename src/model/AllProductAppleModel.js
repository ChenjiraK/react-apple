import { ProductModel } from "./ProductModel";
import Util from "../helper/Utility";

export class AllProductAppleModel {
    constructor(data = {}) {
        this.id = data.id ?? null;
        this.title = data.title ?? null;
        this.products = data.items.map((item) => new ProductModel(item).getDataApi());
    }
    getDataApi(){
        return Util.normalObject(this);
    }
}