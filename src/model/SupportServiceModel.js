import Util from "../helper/Utility";

export class SupportServiceModel {
    constructor(data = {}) {
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