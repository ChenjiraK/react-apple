export class CategoriesListModel {
    constructor(data = {}) {
        this.id = data.id ?? null
        this.name = data.name ?? null
        this.subCategories = data.sub_categories.map((sub) => new SubCategoriesModel(sub));
    }

    getParams() {}
}
class SubCategoriesModel {
    constructor(data = {}) {
        this.id = data.id ?? null;
        this.value = data.type ?? null;
        this.text = data.name ?? null;
        this.type = data.type ?? null;
    }
}