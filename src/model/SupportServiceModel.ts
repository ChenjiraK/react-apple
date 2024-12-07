import Util from "../helper/Utility";

export class SupportServiceModel {
    id: string | number
    icon: any
    title: string
    detail: string
    link: string
    constructor(data:any = {}) {
        this.id = data.id ?? null;
        this.icon = data.icon ?? null;
        this.title = data.title ?? null;
        this.detail = data.detail ?? null;
        this.link = data.link ?? null;
    }
    getDataApi(){
        return Util.normalObject(this);
    }
}