import Signal from "@rbxts/signal";
import { IItem } from "shared/ItemClasses/Item";
import { ItemFactory } from "shared/ItemFactory";
import { SlotChangeType } from "shared/SlotChangeType";


export class ItemSlot {

    private instanceID?: number;
    private numStacks: number;

    OnSlotChanged: Signal<{ (changeType: SlotChangeType): void }>;

    constructor(instanceID?: number, numStacks: number = 0) {
        this.instanceID = instanceID;
        this.numStacks = numStacks;

        this.OnSlotChanged = new Signal();
    }

    GetNumStacks() {
        return this.numStacks;
    }

    private GetInstanceByID(): IItem {
        return ItemFactory.GetInstance().GetInstanceByID(this.instanceID as number);
    }

    CanAddStack(targetInstanceID: number, amount: number = 1): boolean {
        let targetItemID = ItemFactory.GetInstance().GetInstanceByID(targetInstanceID).GetItemID();
        let instanceItemID = (this.instanceID !== undefined) ? this.GetInstanceByID().GetItemID() : undefined;

        return instanceItemID === undefined || (targetItemID === instanceItemID && this.numStacks + amount <= this.GetInstanceByID().GetMaximumStacks());
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
        return (this.instanceID === undefined) ? undefined : this.GetInstanceByID();
    }

    SetItem(instanceID: number) {
        this.instanceID = instanceID;;
    }
}