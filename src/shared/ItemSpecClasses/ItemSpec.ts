import { IItem, Item } from "shared/ItemClasses/Item";
import { ItemFactory } from "shared/ItemFactory";



export interface IItemSpec {
    GetItemName(): string;
    GetItemID(): number;
    GetIconID(): string;
    GetItemDescription(): string;
    GetMaximumStacks(): number;
    CreateItemFromSpec(): IItem;
}

export class ItemSpec implements IItemSpec {

    private static ID: number = 0;

    private id: number;
    private itemName: string;
    private itemDesc: string;
    private iconID: string;
    private maximumStacks: number;

    constructor(itemName: string, itemDesc: string, maximumStacks: number, iconID: string = "DefaultIcon") {
        this.itemName = itemName;
        this.maximumStacks = maximumStacks;
        this.iconID = iconID;

        this.id = ItemSpec.ID;
        ItemSpec.ID++;


        print(itemName + " has ID " + this.id);
        this.itemDesc = itemDesc;
    }

    GetIconID(): string {
        return this.iconID;
    }

    CreateItemFromSpec(): IItem {
        return ItemFactory.GetInstance().CreateItem(this);
    }

    GetMaximumStacks() {
        return this.maximumStacks;
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