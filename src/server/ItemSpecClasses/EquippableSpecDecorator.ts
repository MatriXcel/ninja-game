import { Equippable, IEquippable } from "server/ItemClasses/Equippable";
import { IItem } from "server/ItemClasses/Item";
import { IModelVisualizable, ModelVisualizable } from "server/ItemClasses/ModelVisualizable";
import { IModelVisualizableSpec } from "./ModelVisualizableSpecDecorator";



export interface IEquippableSpecDecorator extends IModelVisualizableSpec {
    CreateItemFromSpec(): IEquippable;
}

export class EquippableSpecDecorator implements IEquippableSpecDecorator {

    private modelVisualizableSpec: IEquippableSpecDecorator;

    constructor(modelVisualizableSpec: IEquippableSpecDecorator) {
        this.modelVisualizableSpec = modelVisualizableSpec;
    }

    CreateItemFromSpec(): IEquippable {
        return new Equippable(this.CreateItemFromSpec(), this);
    }

    GetItemName(): string {
        return this.modelVisualizableSpec.GetItemName();
    }

    GetItemID(): number {
        return this.modelVisualizableSpec.GetItemID();
    }

    GetItemDescription(): string {
        return this.modelVisualizableSpec.GetItemDescription();
    }
}
