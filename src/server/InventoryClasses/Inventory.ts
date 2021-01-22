import { IItem } from "server/ItemClasses/Item";
import { ItemSlot } from "./ItemSlot";

export class Inventory {
    slots: ItemSlot[];

    constructor(startingItems: IItem[]) {
        this.slots = [];
        this.SetStartingItems(startingItems);
    }

    SetStartingItems(startingItems: IItem[]) {
        startingItems.forEach((item) => {
            this.AddItem(item);
        });
    }

    AddItem(item: IItem) {
        for (let i = 0; i < this.slots.size(); i++) {
            if (this.slots[i].CanAddStack(item)) {
                this.slots[i].SetItem(item);
                this.slots[i].AddStack();
                return true;
            }
        }

        for (let i = 0; i < this.slots.size(); i++) {
            if (this.slots[i].GetItem() == null) {
                this.slots[i].SetItem(item);
                this.slots[i].AddStack();
                return true;
            }
        }

        return false;
    }

}