import { Item } from "./Item";
import { PizzaAddon } from "./PizzaAddon";
import { PizzaModifier } from "./PizzaModifier";

export interface PizzaItem{
    id: number,
    pizzas: string,
    border: string,
    status: string,
    size: string,
    observation: string,
    table : string
}