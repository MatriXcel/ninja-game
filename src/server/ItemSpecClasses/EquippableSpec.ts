import { Equippable, IEquippable } from "server/ItemClasses/Equippable";
import { IItem, Item } from "server/ItemClasses/Item";
import { ModelVisualizable } from "server/ItemClasses/ModelVisualizable";
import { EquippableSpecDecorator, IEquippableSpecDecorator } from "./EquippableSpecDecorator";
import { ItemSpec } from "./ItemSpec";
import { IModelVisualizableSpec, ModelVisualizableSpecDecorator } from "./ModelVisualizableSpecDecorator";


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