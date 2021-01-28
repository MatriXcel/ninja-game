import { DamageEffect } from "server/Effects/DamageEffect";
import { IEquippable } from "server/ItemClasses/Equippable";
import { HasDamageEffect } from "server/ItemClasses/HasDamageEffect";
import { IEquippableSpecDecorator } from "./EquippableSpecDecorator";
import { IEffectSpecDecorator } from "./IEffectSpecDecorator";

export interface IDamageSpecDecorator extends IEffectSpecDecorator {
}

export class DamageSpecDecorator implements IDamageSpecDecorator {

    private equippableSpecDecorator: IEquippableSpecDecorator;
    private damageEffect: DamageEffect;

    constructor(equippableSpecDecorator: IEquippableSpecDecorator, damageEffect: DamageEffect) {
        this.equippableSpecDecorator = equippableSpecDecorator;
        this.damageEffect = damageEffect;
    }

    GetIconID(): string | undefined {
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

    CreateItemFromSpec(): HasDamageEffect {
        return new HasDamageEffect(this.equippableSpecDecorator.CreateItemFromSpec(), this);
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