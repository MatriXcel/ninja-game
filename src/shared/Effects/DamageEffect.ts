import { Attribute } from "shared/AttributeClasses/Attribute";
import { RawBonus } from "shared/AttributeClasses/RawBonus";
import { IEffect } from "./IEffect";

export class DamageEffect implements IEffect {
    private damageAmount: number;

    constructor(damageAmount: number) {
        this.damageAmount = damageAmount;
    }

    ExecuteEffect(character: any) {

    }

    GetDescription(): string {
        return '+${this.damageAmount} Damage';
    }
}