import { ItemCardapio } from "./ItemCardapio";
import { Table } from "./Table";

export interface Drink{
    id : number,
    price : number,
    tableNumber : number,
    item : ItemCardapio,
    deliveryPreference : boolean,
    status : string
}