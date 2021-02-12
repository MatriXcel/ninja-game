import { Inventory } from "server/InventoryClasses/Inventory";
import { IItemSpec } from "shared/ItemSpecClasses/ItemSpec";
import { ItemSpecOracle } from "shared/ItemSpecOracle";

export class GameCharacter {

    private inventory: Inventory;
    private model: Model;

    constructor(model: Model) {
        this.model = model;
        let itemSpecOracle = ItemSpecOracle.GetInstance();

        this.inventory = new Inventory([
            (itemSpecOracle.GetSpecByName("Warrior Sword") as IItemSpec).CreateItemFromSpec().GetInstanceID(),
            (itemSpecOracle.GetSpecByName("Warrior Sword") as IItemSpec).CreateItemFromSpec().GetInstanceID(),
        ]);
    }

    GetInventory(): Inventory {
        return this.inventory;
    }
}