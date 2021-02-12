import { HealEffect } from "shared/Effects/HealEffect";
import { Equippable, IEquippable } from "shared/ItemClasses/Equippable";
import { HasHealEffect, IHasHealEffect } from "shared/ItemClasses/HasHealEffect";
import { IItem, Item } from "shared/ItemClasses/Item";
import { ModelVisualizable } from "shared/ItemClasses/ModelVisualizable";
import { ItemFactory } from "shared/ItemFactory";
import { EquippableSpec, IEquippableSpec } from "./EquippableSpec";
import { IEquippableSpecDecorator } from "./EquippableSpecDecorator";
import { IEffectSpecDecorator } from "./IEffectSpecDecorator";

export interface IHealSpecDecorator extends IEffectSpecDecorator {
    CreateItemFromSpec(): IHasHealEffect;
}

export class HealSpecDecorator implements IHealSpecDecorator {

    private healEffect: HealEffect;
    private equippableSpecDecorator: IEquippableSpecDecorator;


    constructor(equippableSpecDecorator: IEquippableSpecDecorator, healEffect: HealEffect) {
        this.equippableSpecDecorator = equippableSpecDecorator;
        this.healEffect = healEffect;
    }

    GetIconID(): string {
        return this.equippableSpecDecorator.GetIconID();
    }

    GetEffectDescription(): string {
        return this.healEffect.GetDescription();
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

    CreateItemFromSpec(): IHasHealEffect {
        return ItemFactory.GetInstance().CreateHasHealEffect(this);
    }
}