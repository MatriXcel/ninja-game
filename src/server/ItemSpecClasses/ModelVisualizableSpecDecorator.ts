import { IItem, Item } from "server/ItemClasses/Item";
import { ModelVisualizable } from "server/ItemClasses/ModelVisualizable";
import { EquippableSpec } from "./EquippableSpec";
import { IItemSpec, ItemSpec } from "./ItemSpec";

export interface IModelVisualizableSpec extends IItemSpec {
    CreateItemFromModelVisualizableSpecDecorator(): ModelVisualizable;
}

export class ModelVisualizableSpecDecorator implements IModelVisualizableSpec {
    private itemSpec: IItemSpec;
    private model: Model;


    constructor(itemSpec: IItemSpec, model: Model) {
        this.itemSpec = itemSpec;
        this.model = model;
    }

    CreateItemFromItemSpec(): IItem {
        return this.itemSpec.CreateItemFromItemSpec();
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

    CreateItemFromModelVisualizableSpecDecorator(): ModelVisualizable {
        return this.CreateItemFromSpec();
    }

    CreateItemFromSpec(): ModelVisualizable {
        return new ModelVisualizable(this.CreateItemFromItemSpec(), this);
    }
}