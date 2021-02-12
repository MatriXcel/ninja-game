import { DamageEffect } from "shared/Effects/DamageEffect";
import { IEquippable } from "shared/ItemClasses/Equippable";
import { HasDamageEffect, IHasDamageEffect } from "shared/ItemClasses/HasDamageEffect";
import { ItemFactory } from "shared/ItemFactory";
import { IEquippableSpecDecorator } from "./EquippableSpecDecorator";
import { IEffectSpecDecorator } from "./IEffectSpecDecorator";

export interface IDamageSpecDecorator extends IEffectSpecDecorator {
    CreateItemFromSpec(): IHasDamageEffect;
}

export class DamageSpecDecorator implements IDamageSpecDecorator {

    private equippableSpecDecorator: IEquippableSpecDecorator;
    private damageEffect: DamageEffect;

    constructor(equippableSpecDecorator: IEquippableSpecDecorator, damageEffect: DamageEffect) {
        this.equippableSpecDecorator = equippableSpecDecorator;
        this.damageEffect = damageEffect;
    }

    GetIconID(): string {
        return this.equippableSpecDecorator.GetIconID();
    }

    GetEffectDescription(): string {
        return this.damageEffect.GetDescription();
    }

    GetHealEffect(): DamageEffect {
        return this.damageEffect;
    }

    GetMaximumStacks(): number {
        return this.equippableSpecDecorator.GetMaximumStacks();
    }

    CreateItemFromSpec(): IHasDamageEffect {
        return ItemFactory.GetInstance().CreateHasDamageEffect(this);
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
}