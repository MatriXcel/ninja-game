import { IItemSpec, ItemSpec } from "server/ItemSpecClasses/ItemSpec";
import { IItemVisitor } from "server/InventoryClasses/ClientSlotInfoExtractor";
import { IModelVisualizable } from "./ModelVisualizable";

export interface IItem {
    GetItemName(): string;
    GetItemID(): number;
    GetItemDescription(): string;
    GetMaximumStacks(): number;
    GetIconID(): string | undefined;

    Accept(visitor: IItemVisitor): void;
}

export class Item implements IItem {
    itemSpec: IItemSpec

    constructor(itemSpec: IItemSpec) {
        this.itemSpec = itemSpec;
    }
    GetIconID(): string | undefined {
        return this.itemSpec.GetIconID();
    }

    Accept(visitor: IItemVisitor): void {
        visitor.visitItem(this);
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