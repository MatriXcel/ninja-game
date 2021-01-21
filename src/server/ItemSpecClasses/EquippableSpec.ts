import { Equippable } from "server/ItemClasses/Equippable";
import { IItem, Item } from "server/ItemClasses/Item";
import { ModelVisualizable } from "server/ItemClasses/ModelVisualizable";
import { EquippableSpecDecorator, IEquippableSpecDecorator } from "./EquippableSpecDecorator";
import { ItemSpec } from "./ItemSpec";
import { IModelVisualizableSpec, ModelVisualizableSpecDecorator } from "./ModelVisualizableSpecDecorator";


export interface IEquippableSpec extends IEquippableSpecDecorator {
    CreateItemFromEquippableSpec(): Equippable;
}

export class EquippableSpec implements IEquippableSpec {
    equippableSpecDecorator: IEquippableSpecDecorator;

    constructor(model: Model, itemName: string, itemDesc: string, maximumStacks: number, iconID?: string) {
        this.equippableSpecDecorator = new EquippableSpecDecorator(
            new ModelVisualizableSpecDecorator(
                new ItemSpec(itemName, itemDesc, maximumStacks, iconID),
                model
            )
        )
    }

    CreateItemFromEquippableSpecDecorator(): Equippable {
        return this.equippableSpecDecorator.CreateItemFromEquippableSpecDecorator();
    }

    CreateItemFromModelVisualizableSpecDecorator(): ModelVisualizable {
        return this.equippableSpecDecorator.CreateItemFromModelVisualizableSpecDecorator();
    }

    CreateItemFromItemSpec(): IItem {
        return this.equippableSpecDecorator.CreateItemFromItemSpec();
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

    CreateItemFromEquippableSpec(): Equippable {
        return this.CreateItemFromSpec();
    }

    CreateItemFromSpec(): Equippable {
        return new Equippable(this.CreateItemFromEquippableSpecDecorator(), this);
    }
}