import { Addon } from "../interfaces/Addon";
import { ItemCardapio } from "../interfaces/ItemCardapio";
import { Pizza } from "../interfaces/Pizza";


export class PizzaImp implements Pizza {
  id: number;
  price: number;
  flavors: ItemCardapio[];
  addons: Addon[];
  size: string;
  status: string;
  tableNumber: number;

  constructor(
    id: number,
    price: number,
    flavors: ItemCardapio[],
    addons: Addon[],
    size: string,
    status: string,
    tableNumber: number
  ) {
    this.id = id;
    this.price = price;
    this.flavors = flavors;
    this.addons = addons;
    this.size = size;
    this.status = status;
    this.tableNumber = tableNumber;
  }
}
