import { IItem, Item } from "server/ItemClasses/Item";
import { ItemSlot } from "./ItemSlot";

export class Inventory {
    slots: ItemSlot[];
    maxSlots: number = 6;

    constructor(startingItems: (IItem | undefined)[]) {
        this.slots = [];

        for (let i = 0; i < this.maxSlots; i++)
            this.slots[i] = new ItemSlot();

        this.SetStartingItems(startingItems);
    }

    SetStartingItems(startingItems: (IItem | undefined)[]) {
        for (let i = 0; i < startingItems.size(); i++) {
            if (startingItems[i] !== undefined) {
                this.AddItem(startingItems[i] as IItem);
            }
        }
    }

    AddItem(item: IItem) {
        print(item.GetItemName())
        for (let i = 0; i < this.slots.size(); i++) {
            if (this.slots[i].CanAddStack(item)) {
                this.slots[i].SetItem(item);
                this.slots[i].AddStack();
                return true;
            }
        }

        for (let i = 0; i < this.slots.size(); i++) {
            if (this.slots[i].GetItem() === undefined) {
                this.slots[i].SetItem(item);
                this.slots[i].AddStack();
                return true;
            }
        }

        return false;
    }

}