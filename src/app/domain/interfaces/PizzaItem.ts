import { Item } from "./Item";
import { PizzaAddon } from "./PizzaAddon";
import { PizzaModifier } from "./PizzaModifier";

export interface PizzaItem{
    id: number,
    pizzas: String,
    border: String,
    status: String,
    size: String,
    observation: String,
    table : String
}