import { Inventory } from "server/InventoryClasses/Inventory";
import { ItemSlot } from "server/InventoryClasses/ItemSlot";
import { Equippable, IEquippable } from "server/ItemClasses/Equippable";
import { HasDamageEffect } from "server/ItemClasses/HasDamageEffect";
import { HasHealEffect } from "server/ItemClasses/HasHealEffect";
import { IHasEffect } from "server/ItemClasses/IHasEffect";
import { IItem } from "server/ItemClasses/Item";
import { IModelVisualizable, ModelVisualizable } from "server/ItemClasses/ModelVisualizable";
import { ClientSlotData } from "shared/ClientSlotData";

export interface IItemVisitor {
    visitItem(item: IItem): void;
    visitEquippable(item: IEquippable): void;
    visitModelVisualizable(item: IModelVisualizable): void;

    visitHasEffectItem(item: IHasEffect): void;
}


export class ClientSlotInfoExtractor implements IItemVisitor {

    private slot: ItemSlot;
    private slotClientData: ClientSlotData;

    constructor(slot: ItemSlot) {
        this.slot = slot;

        this.slotClientData = {
            itemName: "",
            iconID: "",
            itemDesc: "", numStacks: slot.GetNumStacks()
        }

        this.slot.GetItem()?.Accept(this);
    }

    GetSlotClientData() {
        return this.slotClientData;
    }

    visitItem(item: IItem): void {
        print("entered here");

        this.slotClientData.itemName = item.GetItemName();
        this.slotClientData.itemDesc = item.GetItemDescription();
        this.slotClientData.iconID = item.GetIconID();

        print(this.slotClientData.itemDesc);
    }

    visitEquippable(item: IEquippable): void {
        this.visitModelVisualizable(item);
    }

    visitModelVisualizable(item: IModelVisualizable) {
        this.visitItem(item);
    }

    visitHasEffectItem(item: IHasEffect): void {
        this.visitEquippable(item);

        if (this.slotClientData.effects === undefined) {
            this.slotClientData.effects = new Array<string>();
        }

        (this.slotClientData.effects as string[]).push(item.GetEffectDescription());
    }
}