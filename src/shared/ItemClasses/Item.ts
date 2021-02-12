import { IItemVisitor } from "shared/IItemVisitor";
import { IItemSpec, ItemSpec } from "shared/ItemSpecClasses/ItemSpec";
import { IModelVisualizable } from "./ModelVisualizable";

export interface IItem {
    GetItemName(): string;
    GetItemID(): number;
    GetItemDescription(): string;
    GetMaximumStacks(): number;
    GetIconID(): string;
    GetInstanceID(): number;

    Accept(visitor: IItemVisitor): void;
}

export class Item implements IItem {
    itemSpec: IItemSpec;
    instanceID: number;

    constructor(itemSpec: IItemSpec, instanceID: number) {
        this.itemSpec = itemSpec;
        this.instanceID = instanceID;
    }

    GetInstanceID(): number {
        return this.instanceID;
    }

    GetIconID(): string {
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