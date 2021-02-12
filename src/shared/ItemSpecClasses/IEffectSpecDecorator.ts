import { IEquippableSpecDecorator } from "./EquippableSpecDecorator";

export interface IEffectSpecDecorator extends IEquippableSpecDecorator {
    GetEffectDescription(): string;
}