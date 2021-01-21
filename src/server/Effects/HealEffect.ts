import { Attribute } from "server/AttributeClasses/Attribute";
import { RawBonus } from "server/AttributeClasses/RawBonus";
import { IEffect } from "./IEffect";

export class HealEffect implements IEffect {
    healAmount: number;

    constructor(healAmount: number) {
        this.healAmount = healAmount;
    }

    ExecuteEffect(character: any) {

    }

    GetDescription(): string {
        return '+${this.healAmount} Health';
    }
}