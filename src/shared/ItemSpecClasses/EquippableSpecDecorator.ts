import { Equippable, IEquippable } from "shared/ItemClasses/Equippable";
import { IItem } from "shared/ItemClasses/Item";
import { IModelVisualizable, ModelVisualizable } from "shared/ItemClasses/ModelVisualizable";
import { ItemFactory } from "shared/ItemFactory";
import { IModelVisualizableSpecDecorator, ModelVisualizableSpecDecorator } from "./ModelVisualizableSpecDecorator";



export interface IEquippableSpecDecorator extends IModelVisualizableSpecDecorator {
    CreateItemFromSpec(): IEquippable;
}

export class EquippableSpecDecorator implements IEquippableSpecDecorator {

    private modelVisualizableSpec: IModelVisualizableSpecDecorator;

    constructor(modelVisualizableSpec: IModelVisualizableSpecDecorator) {
        this.modelVisualizableSpec = modelVisualizableSpec;
    }

    GetIconID(): string {
        return this.modelVisualizableSpec.GetIconID();
    }
    GetMaximumStacks(): number {
        return this.modelVisualizableSpec.GetMaximumStacks();
    }

    CreateItemFromSpec(): IEquippable {
        return ItemFactory.GetInstance().CreateEquippable(this);
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
