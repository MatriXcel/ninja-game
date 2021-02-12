import { IEquippable } from "./Equippable";

export interface IHasEffect extends IEquippable {
    GetEffectDescription(): string;
}