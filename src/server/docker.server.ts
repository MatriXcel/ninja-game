import { connect } from "@rbxts/roact-rodux";
import { t } from "@rbxts/t"
import { ClientSlotData } from "shared/ClientSlotData";
import { GameCharacter } from "./CharacterClasses/GameCharacter";
import { ClientInventoryInfo } from "./InventoryClasses/ClientInventoryInfo";
import { IItem } from "./ItemClasses/Item";
import { ItemSpecOracle } from "./ItemSpecOracle";


let gameCharacters: Record<string, GameCharacter> = {}
let RS = game.GetService('ReplicatedStorage')


game.GetService('Players').PlayerAdded.Connect((player) => {
    let charModel = (player.Character !== undefined) ? player.Character : player.CharacterAdded.Wait()[0];
    gameCharacters[player.UserId] = new GameCharacter(charModel);

    let characterInventory = gameCharacters[player.UserId].GetInventory();

    let clientInvInfo = new ClientInventoryInfo(characterInventory);

    clientInvInfo.OnInventorySlotInfoChanged.Connect((slotNum, slotInfo) => {
        RS.RemoteEvents.ServerToClient.OnSlotChanged.FireClient(player, slotNum, slotInfo.GetSlotClientData());
    });

    wait(5);

    RS.RemoteEvents.ServerToClient.OnInventoryInit.FireClient(player, clientInvInfo.GetSlotDatas());
});