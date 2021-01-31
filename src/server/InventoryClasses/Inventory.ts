import { IItem, Item } from "server/ItemClasses/Item";
import { ItemSlot } from "./ItemSlot";

export class Inventory {
    private slots: ItemSlot[];
    private maxSlots: number = 9;

    OnSlotChanged: BindableEvent<{ (slotNum: number): void }>;

    constructor(startingItems: (IItem | undefined)[]) {
        this.slots = [];

        for (let i = 0; i < this.maxSlots; i++) {
            this.slots[i] = new ItemSlot();
        }

        this.OnSlotChanged = new Instance("BindableEvent");
        this.SetStartingItems(startingItems);
    }


    GetSlots(): ItemSlot[] {
        return this.slots;
    }

    SetStartingItems(startingItems: (IItem | undefined)[]) {
        for (let i = 0; i < startingItems.size(); i++) {
            if (startingItems[i] !== undefined) {
                this.AddItem(startingItems[i] as IItem);
            }
        }


    }

    GetSlotAtIndex(index: number): ItemSlot {
        return this.slots[index];
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