-- Compiled with roblox-ts v1.0.0-beta.14
local TS = require(game:GetService("ReplicatedStorage"):WaitForChild("rbxts_include"):WaitForChild("RuntimeLib"))
local GameCharacter = TS.import(script, game:GetService("ServerScriptService"), "TS", "CharacterClasses", "GameCharacter").GameCharacter
local ClientInventoryInfo = TS.import(script, game:GetService("ServerScriptService"), "TS", "InventoryClasses", "ClientInventoryInfo").ClientInventoryInfo
local ItemSpecOracle = TS.import(script, game:GetService("ReplicatedStorage"), "TS", "ItemSpecOracle").ItemSpecOracle
local gameCharacters = {}
local RS = game:GetService("ReplicatedStorage")
game:GetService("Players").PlayerAdded:Connect(function(player)
	local charModel = (player.Character ~= nil) and player.Character or (player.CharacterAdded:Wait())
	gameCharacters[player.UserId] = GameCharacter.new(charModel)
	local characterInventory = gameCharacters[player.UserId]:GetInventory()
	local clientInvInfo = ClientInventoryInfo.new(characterInventory)
	clientInvInfo.OnInventorySlotInfoChanged:Connect(function(slotNum, slotData)
		RS.RemoteEvents.ServerToClient.OnSlotChanged:FireClient(player, slotNum, slotData)
	end)
	wait(5)
	print(clientInvInfo:GetSlotClientDatas())
	RS.RemoteEvents.ServerToClient.OnInventoryInit:FireClient(player, clientInvInfo:GetSlotClientDatas())
	wait(2)
	characterInventory:AddItem((ItemSpecOracle:GetInstance():GetSpecByName("Greater Healing Potion")):CreateItemFromSpec():GetInstanceID())
end)
