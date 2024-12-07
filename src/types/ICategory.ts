export type ICategory = {
    id: string | number
    name: string
    min_price?: number
}
export type ISubCategory = {
    id: string | number
    cat_id: number
    name: string
    min_price?: number
}
export type menu = {
    id: string | number
    name: string
    route: string
}
