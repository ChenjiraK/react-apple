import Util from "../helper/Utility";
import { BadgeModel } from './BadgeModel'

export class AppleCareModel {
    id: string | number
    badges: BadgeModel[]
    detail: string
    detail2: string
    name: string
    imgSrc: string | null
    constructor(data:any = {}) {
        this.id = data.id;
        this.badges = data.badges.map((item: any) => new BadgeModel(item));
        this.detail = data.detail ?? '';
        this.detail2 = data.detail2 ?? '';
        this.name = data.name ?? '';
        this.imgSrc = data.image_src ?? null;
    }
    getDataApi(){
        return Util.normalObject(this);
    }
}