import Roact, { ComponentInstanceHandle } from "@rbxts/roact";
import RoactRodux, { StoreProvider } from "@rbxts/roact-rodux";
import Rodux, { Action, Store, StoreCreator } from "@rbxts/rodux";
import { Players, ReplicatedStorage as RS } from "@rbxts/services"
import { ClientSlotData } from "shared/ClientSlotData";



import InventoryUI = require('client/inventory');
let playerGui = Players.LocalPlayer.WaitForChild("PlayerGui") as PlayerGui;


let invData: ClientSlotData[] = [];
let handle: any;

RS.RemoteEvents.ServerToClient.OnInventoryInit.OnClientEvent.Connect((clientInvData: ClientSlotData[]) => {

    invData = clientInvData;

    let store = new Rodux.Store(Rodux.createReducer<string, Action<string>>("hello", {
        handler: (state, action) => 
        {
            return state;
        }
    }))

    
    let app = <StoreProvider store = {store}>
        <InventoryUI.InventoryComponent slotDisplayDatas={invData}></InventoryUI.InventoryComponent>
    </StoreProvider>

    handle = Roact.mount(app, playerGui.FindFirstChild("ScreenGui"), "StoreProvider");
 

    let NewInventoryComponent =  RoactRodux.connect((state, props) => {
        print("STATE HAS CHANGED");
        return props;
    })(InventoryUI.InventoryComponent);
});


RS.RemoteEvents.ServerToClient.OnSlotChanged.OnClientEvent.Connect((slotNumber: number, clientSlotData: ClientSlotData) => {
    invData[slotNumber] = clientSlotData;

    print("SLOT CHANGED ON THE CLIENT END");

     Roact.update(handle, 
        <InventoryUI.InventoryComponent slotDisplayDatas={invData}></InventoryUI.InventoryComponent>
    );
});

