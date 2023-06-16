export class ItemCardapioImp{
    id: number | undefined;
    name: string;
    description: string;
    basePrice: number;
    itemType: string | undefined;

    constructor(name: string, description: string, basePrice: number, itemType: string) {
        this.name = name;
        this.description = description;
        this.basePrice = basePrice;
        this.itemType = itemType;
    }
}
