import { IItem, Item } from "server/ItemClasses/Item";



export interface IItemSpec {
    GetItemName(): string;
    GetItemID(): number;
    GetItemDescription(): string;
    CreateItemFromSpec(): IItem;
}

export class ItemSpec implements IItemSpec {
    private static ID: number;
    private id: number;
    private itemName: string;
    private itemDesc: string;
    private iconID?: string;
    private maximumStacks: number;

    constructor(itemName: string, itemDesc: string, maximumStacks: number, iconID?: string) {
        this.itemName = itemName;
        this.maximumStacks = maximumStacks;
        this.iconID = iconID;
        this.id = ++ItemSpec.ID;
        this.itemDesc = itemDesc;
    }

    CreateItemFromSpec(): IItem {
        return new Item(this);
    }

    GetItemName() {
        return this.itemName;
    }

    GetItemID() {
        return this.id;
    }

    GetItemDescription() {
        return this.itemDesc;
    }
}