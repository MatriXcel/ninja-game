import { HealEffect } from "server/Effects/HealEffect";
import { EquippableSpec } from "server/ItemSpecClasses/EquippableSpec";
import { HealSpecDecorator, IHealSpecDecorator } from "server/ItemSpecClasses/HealSpecDecorator";
import { IItemVisitor } from "server/InventoryClasses/ClientSlotInfo";
import { IEquippable } from "./Equippable";
import { IHasEffect } from "./IHasEffect";

export interface IHasHealEffect extends IHasEffect {
}

export class HasHealEffect implements IHasHealEffect {

    private equippable: IEquippable;
    private healSpecDecorator: IHealSpecDecorator;

    constructor(equippable: IEquippable, healSpecDecorator: IHealSpecDecorator) {
        this.equippable = equippable;
        this.healSpecDecorator = healSpecDecorator;
    }
    GetIconID(): string {
        return this.equippable.GetIconID();
    }
    GetEffectDescription(): string {
        return this.healSpecDecorator.GetEffectDescription();
    }

    Accept(visitor: IItemVisitor): void {
        visitor.visitHasEffectItem(this);
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