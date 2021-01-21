import { EquippableSpec, IEquippableSpec } from "server/ItemSpecClasses/EquippableSpec";
import { EquippableSpecDecorator, IEquippableSpecDecorator } from "server/ItemSpecClasses/EquippableSpecDecorator";
import { ModelVisualizableSpecDecorator } from "server/ItemSpecClasses/ModelVisualizableSpecDecorator";
import { IItem, Item } from "./Item";
import { IModelVisualizable, ModelVisualizable } from "./ModelVisualizable";

export interface IEquippable extends IModelVisualizable {

}

export class Equippable implements IModelVisualizable {

    modelVisualizable: IModelVisualizable;
    equippableSpecDecorator: IEquippableSpecDecorator;

    constructor(modelVisualizable: IModelVisualizable, equippableSpecDecorator: IEquippableSpecDecorator) {
        this.equippableSpecDecorator = equippableSpecDecorator;
        this.modelVisualizable = modelVisualizable;
    }
}