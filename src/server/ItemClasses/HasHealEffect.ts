import { EquippableSpec } from "server/ItemSpecClasses/EquippableSpec";
import { HealSpecDecorator } from "server/ItemSpecClasses/HealSpecDecorator";
import { IEquippable } from "./Equippable";

export class HasHealEffect implements IEquippable {
    private equippable: IEquippable;
    private healSpecDecorator: HealSpecDecorator;

    constructor(equippable: IEquippable, healSpecDecorator: HealSpecDecorator) {
        this.equippable = equippable;
        this.healSpecDecorator = healSpecDecorator;
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