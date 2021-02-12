import { DamageEffect } from "shared/Effects/DamageEffect";
import { IItemVisitor } from "shared/IItemVisitor";
import { DamageSpecDecorator, IDamageSpecDecorator } from "shared/ItemSpecClasses/DamageSpecDecorator";
import { Equippable, IEquippable } from "./Equippable";
import { IHasEffect } from "./IHasEffect";

export interface IHasDamageEffect extends IHasEffect {
}

export class HasDamageEffect implements IHasDamageEffect {
    equippable: IEquippable;
    damageSpecDecorator: IDamageSpecDecorator;

    constructor(equippable: IEquippable, damageSpecDecorator: IDamageSpecDecorator) {
        this.equippable = equippable;
        this.damageSpecDecorator = damageSpecDecorator;
    }


    GetInstanceID(): number {
        return this.equippable.GetInstanceID();
    }

    GetIconID(): string {
        return this.equippable.GetIconID();
    }

    GetEffectDescription(): string {
        return this.damageSpecDecorator.GetEffectDescription();
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