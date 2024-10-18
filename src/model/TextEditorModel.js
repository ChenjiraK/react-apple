import { BadgeModel } from "./BadgeModel";
import Util from "../helper/Utility";

export class TextEditorModel {
    constructor(data = {}) {
        this.id = data.id ?? null;
        this.text = data.text ?? '';
        this.badges = data.badges.map((item) => new BadgeModel(item));
    }
    getDataApi(){
        return Util.normalObject(this);
    }
}