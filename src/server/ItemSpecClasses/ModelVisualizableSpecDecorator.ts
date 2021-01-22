import { IEquippable } from "server/ItemClasses/Equippable";
import { IItem, Item } from "server/ItemClasses/Item";
import { IModelVisualizable, ModelVisualizable } from "server/ItemClasses/ModelVisualizable";
import { EquippableSpec } from "./EquippableSpec";
import { HealSpecDecorator } from "./HealSpecDecorator";
import { IItemSpec, ItemSpec } from "./ItemSpec";



export interface IModelVisualizableSpec extends IItemSpec {
    CreateItemFromSpec(): IModelVisualizable;
}

export class ModelVisualizableSpecDecorator implements IModelVisualizableSpec {
    private itemSpec: IItemSpec;
    private model: Model;

    constructor(itemSpec: IItemSpec, model: Model) {
        this.itemSpec = itemSpec;
        this.model = model;
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
        return new ModelVisualizable(this.itemSpec.CreateItemFromSpec(), this);
    }
}