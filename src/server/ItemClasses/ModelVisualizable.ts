import { IModelVisualizableSpec, ModelVisualizableSpecDecorator } from "server/ItemSpecClasses/ModelVisualizableSpecDecorator";
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