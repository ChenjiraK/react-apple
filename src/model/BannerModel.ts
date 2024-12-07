import Util from "../helper/Utility";

export class BannerModel {
    id: string | number
    imgSrc: string | null
    name: string
    backgroundColor: string
    routerPage: string
    buttonText: string
    category: any
    constructor(data:any = {}) {
        this.id = data.id;
        this.imgSrc = data.image_src ?? null;
        this.name = data.name ?? '';
        this.backgroundColor = data.background_color ?? '';
        this.routerPage = data.router_page ?? '';
        this.buttonText = data.button_text ?? '';
        this.category = data.category ?? '';
    }
    getDataApi(){
        return Util.normalObject(this);
    }
}