import Util from "../helper/Utility";

export class CategoryListModel {
    id: string | number
    name: string
    subCategories: SubCategoryModel[]

    constructor(data: any = {}) {
        this.id = data.id ?? null
        this.name = data.name ?? ''
        this.subCategories = data.sub_categories.map((sub: any) => new SubCategoryModel(sub));
    }

    getDataApi(){
        return Util.normalObject(this);
    }
}
class SubCategoryModel {
    id: string | number
    value: any
    text: string
    type: string | number
    constructor(data:any = {}) {
        this.id = data.id ?? null;
        this.value = data.type ?? null;
        this.text = data.name ?? null;
        this.type = data.type ?? null;
    }
}