import { ItemCardapio } from "./ItemCardapio";
import { Addon } from "./Addon";

export interface Pizza{
    id: number,
    price: number,
    flavors: ItemCardapio[],
    addons: Addon[],     
    size: string,
    status: string
    tableNumber : number
}