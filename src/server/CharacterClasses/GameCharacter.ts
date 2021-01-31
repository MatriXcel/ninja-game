import { Inventory } from "server/InventoryClasses/Inventory";
import { IItem } from "server/ItemClasses/Item";
import { IItemSpec } from "server/ItemSpecClasses/ItemSpec";
import { ItemSpecOracle } from "server/ItemSpecOracle";

export class GameCharacter {

    private inventory: Inventory;
    private model: Model;

    constructor(model: Model) {
        this.model = model;
        let itemSpecOracle = ItemSpecOracle.GetInstance();

        print(itemSpecOracle.GetSpecByName("Warrior Sword"));

        this.inventory = new Inventory([
            itemSpecOracle.GetSpecByName("Warrior Sword")?.CreateItemFromSpec(),
            itemSpecOracle.GetSpecByName("Warrior Sword")?.CreateItemFromSpec(),
        ]);

        // this.inventory.AddItem(itemSpecOracle.GetSpecByName("Warrior Sword")?.CreateItemFromSpec() as IItem);
    }

    GetInventory(): Inventory {
        return this.inventory;
    }
}