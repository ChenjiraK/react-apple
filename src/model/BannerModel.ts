import Util from "../helper/Utility";

export class BannerModel {
    constructor(data = {}) {
        this.id = data.id ?? null;
        this.imgSrc = data.image_src ?? null;
        this.name = data.name ?? null;
        this.backgroundColor = data.background_color ?? null;
        this.routerPage = data.router_page ?? null;
        this.buttonText = data.button_text ?? null;
        this.category = data.category ?? null;
    }
    getDataApi(){
        return Util.normalObject(this);
    }
}