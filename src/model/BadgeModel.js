export class BadgeModel {
    constructor(data = {}) {
        this.id = data.id ?? null;
        this.badgeLabel = data.badge_label ?? null;
        this.badgeColor = data.badge_color ?? null;
    }
}