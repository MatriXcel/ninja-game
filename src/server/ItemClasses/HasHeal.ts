import { EquippableSpec } from "server/ItemSpecClasses/EquippableSpec";
import { HealSpecDecorator } from "server/ItemSpecClasses/HealSpecDecorator";
import { IEquippable } from "./Equippable";

export class HasHeal implements IEquippable {
    private equippable: IEquippable;
    private healSpecDecorator: HealSpecDecorator;

    constructor(equippable: IEquippable, healSpecDecorator: HealSpecDecorator) {
        this.equippable = equippable;
        this.healSpecDecorator = healSpecDecorator;
    }
}