import { IBadge } from './IBadge';

export type IProduct = {
    id: string | number
    imgSrc: string
    price: number
    name: string
    currency: string
    badges: IBadge[]
}