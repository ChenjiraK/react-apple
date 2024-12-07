import Util from "../helper/Utility";

export class AssistModel {
    id: string | number
    order: number
    title: string
    imgSrc: string | null
    detail: string
    btnText: string
    routeUrl: string | null

    constructor(data:any = {}) {
        this.id = data.id;
        this.order = data.order ?? 0;
        this.title = data.title ?? '';
        this.imgSrc = data.image_src ?? '';
        this.detail = data.detail ?? '';
        this.btnText = data.btn_text ?? '';
        this.routeUrl = data.route_url ?? null;
    }
    getDataApi(){
        return Util.normalObject(this);
    }
}