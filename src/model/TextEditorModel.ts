import { BadgeModel } from "./BadgeModel";
import Util from "../helper/Utility";
import { IBadge } from "@/types/IBadge";
export class TextEditorModel {
    id: string | number | null;
    text: string;
    badges: IBadge[];

    constructor(data:any = {}) {
        this.id = data.id ?? null;
        this.text = data.text ?? '';
        this.badges = data.badges.map((item: IBadge) => new BadgeModel(item));
    }
    getDataApi(){
        return Util.normalObject(this);
    }
}