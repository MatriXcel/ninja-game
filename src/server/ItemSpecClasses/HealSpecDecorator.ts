import { RawHealEffect } from "server/Effects/RawHealEffect";
import { Equippable, IEquippable } from "server/ItemClasses/Equippable";
import { HasHeal } from "server/ItemClasses/HasHeal";
import { IItem, Item } from "server/ItemClasses/Item";
import { ModelVisualizable } from "server/ItemClasses/ModelVisualizable";
import { EquippableSpec, IEquippableSpec } from "./EquippableSpec";
import { IEquippableSpecDecorator } from "./EquippableSpecDecorator";


export class HealSpecDecorator implements IEquippableSpecDecorator {

    private healEffect: RawHealEffect;
    private equippableSpecDecorator: IEquippableSpecDecorator;


    constructor(equippableSpecDecorator: IEquippableSpecDecorator, healEffect: RawHealEffect) {
        this.equippableSpecDecorator = equippableSpecDecorator;
        this.healEffect = healEffect;
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

    CreateItemFromSpec(): HasHeal {
        return new HasHeal(this.equippableSpecDecorator.CreateItemFromSpec(), this);
    }
}