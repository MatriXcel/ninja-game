import { IModelVisualizableSpec, ModelVisualizableSpecDecorator } from "server/ItemSpecClasses/ModelVisualizableSpecDecorator";
import { IItemVisitor } from "server/InventoryClasses/ClientSlotInfoExtractor";
import { IItem, Item } from "./Item";

export interface IModelVisualizable extends IItem {

}

export class ModelVisualizable implements IModelVisualizable {

    item: IItem;
    modelVisualizableSpecDecorator: IModelVisualizableSpec;

    constructor(item: IItem, modelVisualizableSpecDecorator: IModelVisualizableSpec) {
        this.item = item;
        this.modelVisualizableSpecDecorator = modelVisualizableSpecDecorator;
    }

    GetIconID(): string | undefined {
        return this.modelVisualizableSpecDecorator.GetIconID();
    }

    Accept(visitor: IItemVisitor): void {
        visitor.visitModelVisualizable(this);
    }

    GetItemName(): string {
        return this.item.GetItemName();
    }

    GetItemID(): number {
        return this.item.GetItemID();
    }

    GetItemDescription(): string {
        return this.item.GetItemDescription();
    }

    GetMaximumStacks(): number {
        return this.item.GetMaximumStacks();
    }
}