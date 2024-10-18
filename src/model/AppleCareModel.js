import Util from "../helper/Utility";
import { BadgeModel } from './BadgeModel'

export class AppleCareModel {
    constructor(data = {}) {
        this.id = data.id ?? null;
        this.badges = data.badges.map((item) => new BadgeModel(item));
        this.detail = data.detail ?? null;
        this.detail2 = data.detail2 ?? null;
        this.name = data.name ?? null;
        this.imgSrc = data.image_src ?? null;
    }
    getDataApi(){
        return Util.normalObject(this);
    }
}