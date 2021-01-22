import { HealEffect } from "server/Effects/HealEffect";
import { Equippable, IEquippable } from "server/ItemClasses/Equippable";
import { HasHealEffect } from "server/ItemClasses/HasHealEffect";
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

    CreateItemFromSpec(): HasHealEffect {
        return new HasHealEffect(this.equippableSpecDecorator.CreateItemFromSpec(), this);
    }
}