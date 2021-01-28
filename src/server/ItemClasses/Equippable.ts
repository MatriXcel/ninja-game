import { EquippableSpec, IEquippableSpec } from "server/ItemSpecClasses/EquippableSpec";
import { EquippableSpecDecorator, IEquippableSpecDecorator } from "server/ItemSpecClasses/EquippableSpecDecorator";
import { ModelVisualizableSpecDecorator } from "server/ItemSpecClasses/ModelVisualizableSpecDecorator";
import { IItemVisitor } from "server/InventoryClasses/ClientSlotInfoExtractor";
import { IItem, Item } from "./Item";
import { IModelVisualizable, ModelVisualizable } from "./ModelVisualizable";

export interface IEquippable extends IModelVisualizable {

}

export class Equippable implements IModelVisualizable {

    modelVisualizable: IModelVisualizable;
    equippableSpecDecorator: IEquippableSpecDecorator;

    constructor(modelVisualizable: IModelVisualizable, equippableSpecDecorator: IEquippableSpecDecorator) {
        this.equippableSpecDecorator = equippableSpecDecorator;
        this.modelVisualizable = modelVisualizable;
    }
    GetIconID(): string | undefined {
        return this.modelVisualizable.GetIconID();
    }

    Accept(visitor: IItemVisitor): void {
        visitor.visitModelVisualizable(this);
    }

    GetItemName(): string {
        return this.modelVisualizable.GetItemName();
    }

    GetItemID(): number {
        return this.modelVisualizable.GetItemID();
    }

    GetItemDescription(): string {
        return this.modelVisualizable.GetItemDescription();
    }

    GetMaximumStacks(): number {
        return this.modelVisualizable.GetMaximumStacks();
    }
}