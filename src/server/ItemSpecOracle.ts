import { DamageEffect } from "./Effects/DamageEffect";
import { DamageSpecDecorator } from "./ItemSpecClasses/DamageSpecDecorator";
import { EquippableSpec } from "./ItemSpecClasses/EquippableSpec";
import { IItemSpec } from "./ItemSpecClasses/ItemSpec";

export class ItemSpecOracle {
    itemSpecDatabase: IItemSpec[];

    constructor() {
        this.itemSpecDatabase = [

            new DamageSpecDecorator(
                new EquippableSpec(
                    new Instance("Model"),
                    "Holy Sword",
                    "a holy sword of the paladins",
                    20
                ),
                new DamageEffect(10)
            ),

        ];
    }

    GetSpecByName(itemName: string): IItemSpec | null {
        this.itemSpecDatabase.forEach(item => {
            if (item.GetItemName() == itemName)
                return item;
        })

        return null;
    }

    GetSpecByID(itemID: number): IItemSpec | null {
        this.itemSpecDatabase.forEach(item => {
            if (item.GetItemID() == itemID)
                return item;
        })

        return null;
    }
}