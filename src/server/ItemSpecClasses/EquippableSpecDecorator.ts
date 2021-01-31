import { Equippable, IEquippable } from "server/ItemClasses/Equippable";
import { IItem } from "server/ItemClasses/Item";
import { IModelVisualizable, ModelVisualizable } from "server/ItemClasses/ModelVisualizable";
import { IModelVisualizableSpec, ModelVisualizableSpecDecorator } from "./ModelVisualizableSpecDecorator";



export interface IEquippableSpecDecorator extends IModelVisualizableSpec {
    CreateItemFromSpec(): IEquippable;
}

export class EquippableSpecDecorator implements IEquippableSpecDecorator {

    private modelVisualizableSpec: IModelVisualizableSpec;

    constructor(modelVisualizableSpec: IModelVisualizableSpec) {
        this.modelVisualizableSpec = modelVisualizableSpec;
    }

    GetIconID(): string {
        return this.modelVisualizableSpec.GetIconID();
    }
    GetMaximumStacks(): number {
        return this.modelVisualizableSpec.GetMaximumStacks();
    }

    CreateItemFromSpec(): IEquippable {
        return new Equippable(this.modelVisualizableSpec.CreateItemFromSpec(), this);
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
