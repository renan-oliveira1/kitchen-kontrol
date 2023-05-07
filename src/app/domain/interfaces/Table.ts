import { Drink } from "./Drink";
import { Pizza } from "./Pizza";

export interface Table{
    id: number,
    pizzas: Pizza[],
    drinks: Drink[],
}