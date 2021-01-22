import { DamageSpecDecorator } from "server/ItemSpecClasses/DamageSpecDecorator";
import { Equippable, IEquippable } from "./Equippable";

export class HasDamageEffect implements IEquippable {
    equippable: IEquippable;
    damageSpecDecorator: DamageSpecDecorator;

    constructor(equippable: IEquippable, damageSpecDecorator: DamageSpecDecorator) {
        this.equippable = equippable;
        this.damageSpecDecorator = damageSpecDecorator;
    }

    GetItemName(): string {
        return this.equippable.GetItemName();
    }

    GetItemID(): number {
        return this.equippable.GetItemID();
    }

    GetItemDescription(): string {
        return this.equippable.GetItemDescription();
    }

    GetMaximumStacks(): number {
        return this.equippable.GetMaximumStacks();
    }
}