import { DamageEffect } from "./Effects/DamageEffect";
import { ConsumableSpec } from "./ItemSpecClasses/ConsumableSpec";
import { DamageSpecDecorator } from "./ItemSpecClasses/DamageSpecDecorator";
import { EquippableSpec } from "./ItemSpecClasses/EquippableSpec";
import { IItemSpec, ItemSpec } from "./ItemSpecClasses/ItemSpec";

export class ItemSpecOracle {
    private itemSpecDatabase: IItemSpec[];
    private static instance: ItemSpecOracle;

    constructor() {
        this.itemSpecDatabase = [

            new DamageSpecDecorator(
                new EquippableSpec(
                    new Instance("Model"),
                    "Warrior Sword",
                    "a holy sword of the paladins",
                    20,
                    "SwordIcon"
                ),
                new DamageEffect(10)
            ),

            new ItemSpec(
                "Greater Healing Potion",
                "Heals the user",
                4,
                "PotionIcon"
            )
        ];
    }

    public static GetInstance(): ItemSpecOracle {
        if (ItemSpecOracle.instance === undefined) {
            ItemSpecOracle.instance = new ItemSpecOracle();
        }

        return ItemSpecOracle.instance;
    }

    GetSpecByName(itemName: string): IItemSpec | undefined {

        let finalItem: IItemSpec | undefined = undefined;

        this.itemSpecDatabase.forEach(item => {
            if (item.GetItemName() === itemName) {
                finalItem = item;
                return;
            }
        })

        return finalItem;
    }

    GetSpecByID(itemID: number): IItemSpec | undefined {
        this.itemSpecDatabase.forEach(item => {
            if (item.GetItemID() === itemID)
                return item;
        })

        return undefined;
    }
}