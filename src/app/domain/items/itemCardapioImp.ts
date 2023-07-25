export class ItemCardapioImp{
    id: number | undefined;
    name: string;
    description: string;
    basePrice: number;
    itemType: string | undefined;
    imgUrl: string;

    constructor(name: string, description: string, basePrice: number, itemType: string, imgUrl: string) {
        this.name = name;
        this.description = description;
        this.basePrice = basePrice;
        this.itemType = itemType;
        this.imgUrl = imgUrl;
    }
}
