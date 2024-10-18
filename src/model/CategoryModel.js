import Util from "../helper/Utility";

export class CategoryListModel {
    constructor(data = {}) {
        this.id = data.id ?? null
        this.name = data.name ?? null
        this.subCategories = data.sub_categories.map((sub) => new SubCategoryModel(sub));
    }

    getDataApi(){
        return Util.normalObject(this);
    }
}
class SubCategoryModel {
    constructor(data = {}) {
        this.id = data.id ?? null;
        this.value = data.type ?? null;
        this.text = data.name ?? null;
        this.type = data.type ?? null;
    }
}