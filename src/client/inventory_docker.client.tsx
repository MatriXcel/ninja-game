import Roact, { ComponentInstanceHandle } from "@rbxts/roact";
import RoactRodux, { StoreProvider } from "@rbxts/roact-rodux";
import Rodux, { Action, Store, StoreCreator } from "@rbxts/rodux";
import { Players, ReplicatedStorage as RS } from "@rbxts/services"
import { ClientSlotData } from "shared/ClientSlotData";
import { InventoryComponentProps, InventoryUI } from "./inventory";



let playerGui = Players.LocalPlayer.WaitForChild("PlayerGui") as PlayerGui;


let handle: any;

let invProps: InventoryComponentProps = {
    slotDisplayDatas: []
};

RS.RemoteEvents.ServerToClient.OnInventoryInit.OnClientEvent.Connect((clientInvData: ClientSlotData[]) => {


    let store = new Rodux.Store(Rodux.createReducer<string, Action<string>>("hello", {
        handler: (state, action) => 
        {
            return state;
        }
    }))

    invProps.slotDisplayDatas = clientInvData;
    

    let app = <StoreProvider store = {store}>
        <InventoryUI {...invProps}></InventoryUI>
    </StoreProvider>

    handle = Roact.mount(app, playerGui.FindFirstChild("ScreenGui"), "StoreProvider");
 

    let NewInventoryComponent =  RoactRodux.connect((state, props) => {
        return props;
    })(InventoryUI);
});


RS.RemoteEvents.ServerToClient.OnSlotChanged.OnClientEvent.Connect((slotNumber: number, clientSlotData: ClientSlotData) => {
    invProps.slotDisplayDatas[slotNumber] = clientSlotData;

     Roact.update(handle, 
        <InventoryUI {...invProps}></InventoryUI>
    );
});

