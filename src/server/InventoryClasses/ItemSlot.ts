import Signal from "@rbxts/signal";
import { IItem } from "server/ItemClasses/Item";
import { SlotChangeType } from "shared/SlotChangeType";


export class ItemSlot {

    private item?: IItem;
    private numStacks: number;

    OnSlotChanged: Signal<{ (changeType: SlotChangeType): void }>;

    constructor(item?: IItem, numStacks: number = 0) {
        this.item = item;
        this.numStacks = numStacks;

        this.OnSlotChanged = new Signal();
    }

    GetNumStacks() {
        return this.numStacks;
    }

    CanAddStack(item: IItem, amount: number = 1): boolean {
        return this.item !== undefined && this.item.GetItemID() === item.GetItemID() && this.numStacks + amount <= this.item.GetMaximumStacks();
    }

    AddStack(numStacks: number = 1) {
        if (numStacks === 0) return;

        this.numStacks += numStacks;

        if (this.numStacks - numStacks === 0)
            this.OnSlotChanged.Fire(SlotChangeType.ITEM_ADDED_ON_EMPTY);
        else
            this.OnSlotChanged.Fire(SlotChangeType.ITEM_ADDED);
    }

    GetItem(): IItem | undefined {
        return this.item;
    }

    SetItem(item: IItem) {
        this.item = item;
    }
}