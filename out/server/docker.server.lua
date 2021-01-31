-- Compiled with roblox-ts v1.0.0-beta.14
local TS = require(game:GetService("ReplicatedStorage"):WaitForChild("rbxts_include"):WaitForChild("RuntimeLib"))
local GameCharacter = TS.import(script, game:GetService("ServerScriptService"), "TS", "CharacterClasses", "GameCharacter").GameCharacter
local ClientInventoryInfo = TS.import(script, game:GetService("ServerScriptService"), "TS", "InventoryClasses", "ClientInventoryInfo").ClientInventoryInfo
local gameCharacters = {}
local RS = game:GetService("ReplicatedStorage")
game:GetService("Players").PlayerAdded:Connect(function(player)
	local charModel = (player.Character ~= nil) and player.Character or (player.CharacterAdded:Wait())
	gameCharacters[player.UserId] = GameCharacter.new(charModel)
	local characterInventory = gameCharacters[player.UserId]:GetInventory()
	local clientInvInfo = ClientInventoryInfo.new(characterInventory)
	clientInvInfo.OnInventorySlotInfoChanged:Connect(function(slotNum, slotInfo)
		RS.RemoteEvents.ServerToClient.OnSlotChanged:FireClient(player, slotNum, slotInfo:GetSlotClientData())
	end)
	wait(5)
	RS.RemoteEvents.ServerToClient.OnInventoryInit:FireClient(player, clientInvInfo:GetSlotDatas())
end)
