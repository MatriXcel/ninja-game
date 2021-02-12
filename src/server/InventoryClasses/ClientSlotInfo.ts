import Signal from "@rbxts/signal";
import { ItemSlot } from "server/InventoryClasses/ItemSlot";
import { IEquippable } from "shared/ItemClasses/Equippable";
import { IHasEffect } from "shared/ItemClasses/IHasEffect";
import { IItem } from "shared/ItemClasses/Item";
import { IModelVisualizable } from "shared/ItemClasses/ModelVisualizable";
import { ClientSlotData } from "shared/ClientSlotData";
import { SlotChangeType } from "shared/SlotChangeType";
import { IItemVisitor } from "shared/IItemVisitor";


export class ClientSlotInfo implements IItemVisitor {

    private slot: ItemSlot;
    private slotClientData: ClientSlotData;

    OnSlotInfoChanged: Signal<{ (): void }>;

    constructor(slot: ItemSlot) {
        this.slot = slot;
        this.OnSlotInfoChanged = new Signal();

        this.slot.OnSlotChanged.Connect((changeType) => {
            this.slotClientData.numStacks = this.slot.GetNumStacks();

            if (changeType === SlotChangeType.ITEM_ADDED_ON_EMPTY)
                this.slotClientData.itemID = (this.slot.GetItem() as IItem).GetItemID();

            this.OnSlotInfoChanged.Fire();
        });

        this.slotClientData = {
            itemID: this.slot.GetItem()?.GetItemID(),
            numStacks: this.slot.GetNumStacks()
        }

        print("from clientslotinfo " + this.slotClientData.itemID);
        // itemName: "",
        // iconID: (slot.GetItem() !== undefined) ? (slot.GetItem() as IItem).GetIconID() : "DefaultIcon",
        // itemDesc: "",

        //this.setItemData();
    }



    setItemData() {
        // this.slot.GetItem()?.Accept(this);
    }

    GetSlot(): ItemSlot {
        return this.slot;
    }

    GetSlotClientData() {
        return this.slotClientData;
    }

    visitItem(item: IItem): void {
        print("entered here");

        // this.slotClientData.itemName = item.GetItemName();
        // this.slotClientData.itemDesc = item.GetItemDescription();
        // this.slotClientData.iconID = item.GetIconID();

        // print(this.slotClientData.itemDesc);
    }

    visitEquippable(item: IEquippable): void {
        // this.visitModelVisualizable(item);
    }

    visitModelVisualizable(item: IModelVisualizable) {
        // this.visitItem(item);
    }

    visitHasEffectItem(item: IHasEffect): void {
        // this.visitEquippable(item);

        // if (this.slotClientData.effects === undefined) {
        //     this.slotClientData.effects = new Array<string>();
        // }

        // (this.slotClientData.effects as string[]).push(item.GetEffectDescription());
    }
}