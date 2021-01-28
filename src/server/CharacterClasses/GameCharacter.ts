import { Inventory } from "server/InventoryClasses/Inventory";
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
            itemSpecOracle.GetSpecByName("Warrior Sword")?.CreateItemFromSpec()
        ]);
    }

    GetInventory(): Inventory {
        return this.inventory;
    }
}