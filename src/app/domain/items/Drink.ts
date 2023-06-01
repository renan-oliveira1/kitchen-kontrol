import { Drink } from "../interfaces/Drink";
import { ItemCardapio } from "../interfaces/ItemCardapio";

export class DrinkInput {
  id: number | null;
  price: number;
  tableNumber: number;
  item: ItemCardapio;
  deliveryPreference: boolean;
  status: string;

  constructor(
    id: number | null,
    price: number,
    tableNumber: number,
    item: ItemCardapio,
    deliveryPreference: boolean,
    status: string
  ) {
    this.id = id;
    this.price = price;
    this.tableNumber = tableNumber;
    this.item = item;
    this.deliveryPreference = deliveryPreference;
    this.status = status;
  }
}
