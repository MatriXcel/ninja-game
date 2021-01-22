import { IItem } from "server/ItemClasses/Item";

export class ItemSlot {
    private item: IItem;
    private numStacks: number;

    constructor(item: IItem, numStacks: number) {
        this.item = item;
        this.numStacks = numStacks;
    }

    CanAddStack(item: IItem, amount: number = 1): boolean {
        return this.item !== null && this.item.GetItemID() == item.GetItemID() && this.numStacks + amount <= this.item.GetMaximumStacks();
    }

    AddStack(numStacks: number = 1) {
        this.numStacks += numStacks;
    }

    GetItem(): IItem {
        return this.item;
    }

    SetItem(item: IItem) {
        this.item = item;
    }
}