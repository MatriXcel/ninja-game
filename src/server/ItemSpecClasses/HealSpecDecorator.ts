import { HealEffect } from "server/Effects/HealEffect";
import { Equippable } from "server/ItemClasses/Equippable";
import { HasHeal } from "server/ItemClasses/HasHeal";
import { IItem, Item } from "server/ItemClasses/Item";
import { ModelVisualizable } from "server/ItemClasses/ModelVisualizable";
import { EquippableSpec, IEquippableSpec } from "./EquippableSpec";
import { IEquippableSpecDecorator } from "./EquippableSpecDecorator";


export class HealSpecDecorator implements IEquippableSpecDecorator {
    private healEffect: HealEffect;
    private equippableSpecDecorator: IEquippableSpecDecorator;


    constructor(equippableSpecDecorator: IEquippableSpecDecorator, healEffect: HealEffect) {
        this.equippableSpecDecorator = equippableSpecDecorator;
        this.healEffect = healEffect;
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

    CreateItemFromHasHealSpecDecorator(): HasHeal {
        return this.CreateItemFromSpec();
    }

    CreateItemFromSpec(): HasHeal {
        return new HasHeal(this.CreateItemFromEquippableSpecDecorator(), this);
    }
}