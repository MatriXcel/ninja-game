import { IItemSpec, ItemSpec } from "server/ItemSpecClasses/ItemSpec";
import { IModelVisualizable } from "./ModelVisualizable";

export interface IItem {
    GetItemName(): string;
    GetItemID(): number;
    GetItemDescription(): string;
    GetMaximumStacks(): number;
}

export class Item implements IItem {
    itemSpec: IItemSpec

    constructor(itemSpec: IItemSpec) {
        this.itemSpec = itemSpec;
    }
    GetItemID(): number {
        return this.itemSpec.GetItemID();
    }
    GetItemDescription(): string {
        return this.itemSpec.GetItemDescription();
    }

    GetItemName(): string {
        return this.itemSpec.GetItemName();
    }

    GetMaximumStacks() {
        return this.itemSpec.GetMaximumStacks();
    }
}