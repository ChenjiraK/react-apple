import Util from "../helper/Utility";

export class AssistModel {
    constructor(data = {}) {
        this.id = data.id ?? null;
        this.order = data.order ?? null;
        this.title = data.title ?? null;
        this.imgSrc = data.image_src ?? null;
        this.detail = data.detail ?? null;
        this.btnText = data.btn_text ?? null;
        this.routeUrl = data.route_url ?? null;
    }
    getDataApi(){
        return Util.normalObject(this);
    }
}