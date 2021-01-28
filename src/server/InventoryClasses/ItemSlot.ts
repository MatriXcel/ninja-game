import { IItem } from "server/ItemClasses/Item";

export class ItemSlot {
    private item?: IItem;
    private numStacks: number;

    constructor(item?: IItem, numStacks: number = 0) {
        this.item = item;
        this.numStacks = numStacks;
    }

    GetNumStacks() {
        return this.numStacks;
    }

    CanAddStack(item: IItem, amount: number = 1): boolean {
        return this.item !== undefined && this.item.GetItemID() === item.GetItemID() && this.numStacks + amount <= this.item.GetMaximumStacks();
    }

    AddStack(numStacks: number = 1) {
        this.numStacks += numStacks;
    }

    GetItem(): IItem | undefined {
        return this.item;
    }

    SetItem(item: IItem) {
        this.item = item;
    }
}