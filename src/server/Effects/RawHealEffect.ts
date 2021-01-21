import { Attribute } from "server/AttributeClasses/Attribute";
import { RawBonus } from "server/AttributeClasses/RawBonus";
import { IEffect } from "./IEffect";

export class RawHealEffect implements IEffect {
    healBuff: RawBonus;

    constructor(healBuff: RawBonus) {
        this.healBuff = healBuff;
    }

    ExecuteEffect(character: any) {

    }

    GetDescription(): string {
        return '+${this.healBuff.GetValue()} Health';
    }
}