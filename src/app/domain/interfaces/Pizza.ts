import { ItemCardapio } from "./ItemCardapio";
import { Addon } from "./Addon";
import { Size } from "./PizzaModifier";

export interface Pizza{
    id: number,
    price: number,
    flavors: ItemCardapio[],
    addons: Addon[],     
    size: Size,
    status: string
    tableNumber : number
}