import { Equippable, IEquippable } from "./ItemClasses/Equippable";
import { HasDamageEffect, IHasDamageEffect } from "./ItemClasses/HasDamageEffect";
import { HasHealEffect, IHasHealEffect } from "./ItemClasses/HasHealEffect";
import { IItem, Item } from "./ItemClasses/Item";
import { IModelVisualizable, ModelVisualizable } from "./ItemClasses/ModelVisualizable";
import { IDamageSpecDecorator } from "./ItemSpecClasses/DamageSpecDecorator";
import { EquippableSpec, IEquippableSpec } from "./ItemSpecClasses/EquippableSpec";
import { EquippableSpecDecorator, IEquippableSpecDecorator } from "./ItemSpecClasses/EquippableSpecDecorator";
import { IHealSpecDecorator } from "./ItemSpecClasses/HealSpecDecorator";
import { IItemSpec } from "./ItemSpecClasses/ItemSpec";
import { IModelVisualizableSpecDecorator, ModelVisualizableSpecDecorator } from "./ItemSpecClasses/ModelVisualizableSpecDecorator";

export class ItemFactory {
    static ID: number;
    instances: IItem[];

    private static instance: ItemFactory;

    constructor() {
        this.instances = [];
        ItemFactory.ID = 0;
    }

    public static GetInstance(): ItemFactory {
        if (ItemFactory.instance === undefined) {
            ItemFactory.instance = new ItemFactory();
        }

        return ItemFactory.instance;
    }

    CreateItem(itemSpec: IItemSpec): IItem {
        let newInstance = new Item(itemSpec, ItemFactory.ID);
        this.instances[ItemFactory.ID++] = newInstance;

        return newInstance;
    }

    GetInstanceByID(instanceID: number): IItem {
        return this.instances[instanceID];
    }

    CreateModelVisualizable(modelVisualizableSpecDecorator: IModelVisualizableSpecDecorator): IModelVisualizable {
        return new ModelVisualizable(this.CreateItem(modelVisualizableSpecDecorator), modelVisualizableSpecDecorator);
    }

    CreateEquippable(equippableSpecDecorator: IEquippableSpecDecorator): IEquippable {
        return new Equippable(this.CreateModelVisualizable(equippableSpecDecorator), equippableSpecDecorator);
    }

    CreateHasHealEffect(healSpecDecorator: IHealSpecDecorator): IHasHealEffect {
        return new HasHealEffect(this.CreateEquippable(healSpecDecorator), healSpecDecorator);
    }

    CreateHasDamageEffect(damageSpecDecorator: IDamageSpecDecorator): IHasDamageEffect {
        return new HasDamageEffect(this.CreateEquippable(damageSpecDecorator), damageSpecDecorator);
    }
}