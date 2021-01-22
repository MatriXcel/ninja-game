import { DamageEffect } from "server/Effects/DamageEffect";
import { IEquippable } from "server/ItemClasses/Equippable";
import { HasDamageEffect } from "server/ItemClasses/HasDamageEffect";
import { IEquippableSpecDecorator } from "./EquippableSpecDecorator";

export class DamageSpecDecorator implements IEquippableSpecDecorator {

    private equippableSpecDecorator: IEquippableSpecDecorator;
    private damageEffect: DamageEffect;

    constructor(equippableSpecDecorator: IEquippableSpecDecorator, damageEffect: DamageEffect) {
        this.equippableSpecDecorator = equippableSpecDecorator;
        this.damageEffect = damageEffect;
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