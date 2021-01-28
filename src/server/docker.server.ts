import { t } from "@rbxts/t"
import { ClientSlotData } from "shared/ClientSlotData";
import { GameCharacter } from "./CharacterClasses/GameCharacter";
import { ClientSlotInfoExtractor } from "./InventoryClasses/ClientSlotInfoExtractor";

let gameCharacters: Record<string, GameCharacter> = {}
let RS = game.GetService('ReplicatedStorage')


game.GetService('Players').PlayerAdded.Connect((player) => {
    let charModel = (player.Character !== undefined) ? player.Character : player.CharacterAdded.Wait()[0];
    gameCharacters[player.UserId] = new GameCharacter(charModel);

    let characterInventory = gameCharacters[player.UserId].GetInventory();

    let clientInvData: ClientSlotData[] = [];

    characterInventory.slots.forEach((slot) => {
        clientInvData.push(new ClientSlotInfoExtractor(slot).GetSlotClientData());
    });

    RS.RemoteEvents.ServerToClient.OnInventoryInit.FireClient(player, clientInvData);
});