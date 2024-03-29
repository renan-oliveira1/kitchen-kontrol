import { Addon } from "../interfaces/Addon";
import { ItemCardapio } from "../interfaces/ItemCardapio";
import { Pizza } from "../interfaces/Pizza";
import { Size } from "../interfaces/PizzaModifier";


export class PizzaInput {
  id: number | null;
  price: number;
  flavors: ItemCardapio[];
  addons: Addon[];
  size: Size;
  status: string;
  table_id: number;

  constructor(
    id: number | null,
    price: number,
    flavors: ItemCardapio[],
    addons: Addon[],
    size: Size,
    status: string,
    table_id: number
  ) {
    this.id = id;
    this.price = price;
    this.flavors = flavors;
    this.addons = addons;
    this.size = size;
    this.status = status;
    this.table_id = table_id;
  }
}
