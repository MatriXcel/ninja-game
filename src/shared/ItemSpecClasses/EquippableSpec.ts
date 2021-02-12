import { Equippable, IEquippable } from "shared/ItemClasses/Equippable";
import { IItem, Item } from "shared/ItemClasses/Item";
import { ModelVisualizable } from "shared/ItemClasses/ModelVisualizable";
import { EquippableSpecDecorator, IEquippableSpecDecorator } from "./EquippableSpecDecorator";
import { ItemSpec } from "./ItemSpec";
import { IModelVisualizableSpecDecorator, ModelVisualizableSpecDecorator } from "./ModelVisualizableSpecDecorator";


export interface IEquippableSpec extends IEquippableSpecDecorator {
}

export class EquippableSpec implements IEquippableSpec {

    private equippableSpecDecorator: IEquippableSpecDecorator;

    constructor(model: Model, itemName: string, itemDesc: string, maximumStacks: number, iconID?: string) {

        this.equippableSpecDecorator = new EquippableSpecDecorator(
            new ModelVisualizableSpecDecorator(
                new ItemSpec(itemName, itemDesc, maximumStacks, iconID),
                model
            )
        )

    }
    GetIconID(): string {
        return this.equippableSpecDecorator.GetIconID();
    }
    GetMaximumStacks(): number {
        return this.equippableSpecDecorator.GetMaximumStacks();
    }

    GetItemName(): string {
        return this.equippableSpecDecorator.GetItemName();
    }

    GetItemID(): number {
        return this.equippableSpecDecorator.GetItemID();
    }

    GetItemDescription(): string {
        return this.equippableSpecDecorator.GetItemDescription();
    }

    CreateItemFromSpec(): IEquippable {
        return this.equippableSpecDecorator.CreateItemFromSpec();
    }
}