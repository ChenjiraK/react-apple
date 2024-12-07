export class BadgeModel {
    id: string | number
    badgeLabel: string
    badgeColor: string 
    constructor(data:any = {}) {
        this.id = data.id;
        this.badgeLabel = data.badge_label ?? '';
        this.badgeColor = data.badge_color ?? '';
    }
}