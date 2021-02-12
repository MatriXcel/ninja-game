import { IEquippable } from "shared/ItemClasses/Equippable";
import { IItem, Item } from "shared/ItemClasses/Item";
import { IModelVisualizable, ModelVisualizable } from "shared/ItemClasses/ModelVisualizable";
import { ItemFactory } from "shared/ItemFactory";
import { EquippableSpec } from "./EquippableSpec";
import { HealSpecDecorator } from "./HealSpecDecorator";
import { IItemSpec, ItemSpec } from "./ItemSpec";



export interface IModelVisualizableSpecDecorator extends IItemSpec {
    CreateItemFromSpec(): IModelVisualizable;
}

export class ModelVisualizableSpecDecorator implements IModelVisualizableSpecDecorator {
    private itemSpec: IItemSpec;
    private model: Model;

    constructor(itemSpec: IItemSpec, model: Model) {
        this.itemSpec = itemSpec;
        this.model = model;
    }
    GetIconID(): string {
        return this.itemSpec.GetIconID();
    }

    GetMaximumStacks(): number {
        return this.itemSpec.GetMaximumStacks();
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

    CreateItemFromSpec(): IModelVisualizable {
        return ItemFactory.GetInstance().CreateModelVisualizable(this);
    }
}