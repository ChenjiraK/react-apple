import { ProductModel } from "./ProductModel";
import Util from "../helper/Utility";

export class AllProductAppleModel {
    id: string | number | null
    title: string
    products: ProductModel[];

    constructor(data:any = {}) {
        this.id = data.id ?? null;
        this.title = data.title ?? '';
        this.products = data.items.map((item: any) => new ProductModel(item).getDataApi());
    }
    getDataApi(){
        return Util.normalObject(this);
    }
}