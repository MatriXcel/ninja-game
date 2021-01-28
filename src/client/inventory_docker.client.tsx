import Roact from "@rbxts/roact";
import { Players, ReplicatedStorage as RS } from "@rbxts/services"

import InventoryUI= require('./inventory');

const playerGui = Players.LocalPlayer.FindFirstChild("PlayerGui") as PlayerGui;

RS.RemoteEvents.ServerToClient.OnInventoryInit.OnClientEvent.Connect((clientInvData) => {
    print(clientInvData);
    let invComponent = <InventoryUI.InventoryComponent slotDisplayDatas={clientInvData}></InventoryUI.InventoryComponent>
    Roact.mount(invComponent, playerGui, "UI");
});