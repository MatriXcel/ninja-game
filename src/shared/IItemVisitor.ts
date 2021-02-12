import { IEquippable } from "./ItemClasses/Equippable";
import { IHasEffect } from "./ItemClasses/IHasEffect";
import { IItem } from "./ItemClasses/Item";
import { IModelVisualizable } from "./ItemClasses/ModelVisualizable";

export interface IItemVisitor {
    visitItem(item: IItem): void;
    visitEquippable(item: IEquippable): void;
    visitModelVisualizable(item: IModelVisualizable): void;

    visitHasEffectItem(item: IHasEffect): void;
}
