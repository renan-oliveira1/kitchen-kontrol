import { ItemCardapio } from "./ItemCardapio";

export interface Drink {
    id : number,
    price : number,
    tableNumber : number,
    item : ItemCardapio,
    deliveryPreference : boolean,
    status : string
}