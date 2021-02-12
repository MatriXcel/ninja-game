import { t } from "@rbxts/t"
import { GameCharacter } from "./CharacterClasses/GameCharacter";
import { ClientInventoryInfo } from "./InventoryClasses/ClientInventoryInfo";
import { IItem } from "../shared/ItemClasses/Item";
import { ItemSpecOracle } from "../shared/ItemSpecOracle";
import { IItemSpec } from "shared/ItemSpecClasses/ItemSpec";


let gameCharacters: Record<string, GameCharacter> = {}
let RS = game.GetService('ReplicatedStorage')


game.GetService('Players').PlayerAdded.Connect((player) => {
    let charModel = (player.Character !== undefined) ? player.Character : player.CharacterAdded.Wait()[0];
    gameCharacters[player.UserId] = new GameCharacter(charModel);

    let characterInventory = gameCharacters[player.UserId].GetInventory();

    let clientInvInfo = new ClientInventoryInfo(characterInventory);

    clientInvInfo.OnInventorySlotInfoChanged.Connect((slotNum, slotData) => {
        RS.RemoteEvents.ServerToClient.OnSlotChanged.FireClient(player, slotNum, slotData);
    });

    wait(5);
    print(clientInvInfo.GetSlotClientDatas());
    RS.RemoteEvents.ServerToClient.OnInventoryInit.FireClient(player, clientInvInfo.GetSlotClientDatas());
    wait(2);
    characterInventory.AddItem((ItemSpecOracle.GetInstance().GetSpecByName("Greater Healing Potion") as IItemSpec).CreateItemFromSpec().GetInstanceID());
});
