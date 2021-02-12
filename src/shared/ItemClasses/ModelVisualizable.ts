import { IItemVisitor } from "shared/IItemVisitor";
import { IModelVisualizableSpecDecorator, ModelVisualizableSpecDecorator } from "shared/ItemSpecClasses/ModelVisualizableSpecDecorator";
import { IItem, Item } from "./Item";

export interface IModelVisualizable extends IItem {

}

export class ModelVisualizable implements IModelVisualizable {

    item: IItem;
    modelVisualizableSpecDecorator: IModelVisualizableSpecDecorator;

    constructor(item: IItem, modelVisualizableSpecDecorator: IModelVisualizableSpecDecorator) {
        this.item = item;
        this.modelVisualizableSpecDecorator = modelVisualizableSpecDecorator;
    }

    GetInstanceID() {
        return this.item.GetInstanceID();
    }

    GetIconID(): string {
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