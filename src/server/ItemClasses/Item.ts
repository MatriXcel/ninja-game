import { IItemSpec, ItemSpec } from "server/ItemSpecClasses/ItemSpec";
import { IModelVisualizable } from "./ModelVisualizable";

export interface IItem {
}

export class Item implements IModelVisualizable {
    itemSpec: IItemSpec

    constructor(itemSpec: IItemSpec) {
        this.itemSpec = itemSpec;
    }
}