import Signal from "@rbxts/signal";
import { ClientSlotData } from "shared/ClientSlotData";
import { SlotChangeType } from "shared/SlotChangeType";
import { ClientSlotInfo } from "./ClientSlotInfo";
import { Inventory } from "./Inventory";

export class ClientInventoryInfo {
    private clientSlotInfos: ClientSlotInfo[];
    OnInventorySlotInfoChanged: Signal<{ (slotNum: number, slotInfo: ClientSlotInfo): void }>;

    constructor(inventory: Inventory) {
        this.clientSlotInfos = [];
        this.OnInventorySlotInfoChanged = new Signal();

        for (let i = 0; i < inventory.GetSlots().size(); i++) {
            this.clientSlotInfos[i] = new ClientSlotInfo(inventory.GetSlotAtIndex(i));

            this.clientSlotInfos[i].OnSlotInfoChanged.Connect(() => {
                this.OnInventorySlotInfoChanged.Fire(i, this.clientSlotInfos[i]);
            });
        }
    }

    GetSlotDatas(): ClientSlotData[] {
        return this.clientSlotInfos.map((info) => info.GetSlotClientData());
    }
}