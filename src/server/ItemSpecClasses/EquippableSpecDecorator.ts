import { Equippable } from "server/ItemClasses/Equippable";
import { IItem } from "server/ItemClasses/Item";
import { ModelVisualizable } from "server/ItemClasses/ModelVisualizable";
import { IModelVisualizableSpec } from "./ModelVisualizableSpecDecorator";

export interface IEquippableSpecDecorator extends IModelVisualizableSpec {
    CreateItemFromEquippableSpecDecorator(): Equippable;
}

export class EquippableSpecDecorator implements IEquippableSpecDecorator {

    modelVisualizableSpec: IModelVisualizableSpec;

    constructor(modelVisualizableSpec: IModelVisualizableSpec) {
        this.modelVisualizableSpec = modelVisualizableSpec;
    }

    CreateItemFromSpec(): Equippable {
        return this.CreateItemFromEquippableSpecDecorator();
    }

    CreateItemFromModelVisualizableSpecDecorator(): ModelVisualizable {
        return this.modelVisualizableSpec.CreateItemFromModelVisualizableSpecDecorator();
    }

    CreateItemFromEquippableSpecDecorator(): Equippable {
        return new Equippable(this.CreateItemFromModelVisualizableSpecDecorator(), this);
    }

    CreateItemFromItemSpec(): IItem {
        return this.modelVisualizableSpec.CreateItemFromItemSpec();
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
