-- Compiled with roblox-ts v1.0.0-beta.14
local TS = require(game:GetService("ReplicatedStorage"):WaitForChild("rbxts_include"):WaitForChild("RuntimeLib"))
local GameCharacter = TS.import(script, game:GetService("ServerScriptService"), "TS", "CharacterClasses", "GameCharacter").GameCharacter
local ClientSlotInfoExtractor = TS.import(script, game:GetService("ServerScriptService"), "TS", "InventoryClasses", "ClientSlotInfoExtractor").ClientSlotInfoExtractor
local gameCharacters = {}
local RS = game:GetService("ReplicatedStorage")
game:GetService("Players").PlayerAdded:Connect(function(player)
	local charModel = (player.Character ~= nil) and player.Character or (player.CharacterAdded:Wait())
	gameCharacters[player.UserId] = GameCharacter.new(charModel)
	local characterInventory = gameCharacters[player.UserId]:GetInventory()
	local clientInvData = {}
	local _0 = characterInventory.slots
	local _1 = function(slot)
		local _2 = clientInvData
		local _3 = ClientSlotInfoExtractor.new(slot):GetSlotClientData()
		-- ▼ Array.push ▼
		_2[#_2 + 1] = _3
		-- ▲ Array.push ▲
	end
	-- ▼ ReadonlyArray.forEach ▼
	for _2, _3 in ipairs(_0) do
		_1(_3, _2 - 1, _0)
	end
	-- ▲ ReadonlyArray.forEach ▲
	RS.RemoteEvents.ServerToClient.OnInventoryInit:FireClient(player, clientInvData)
end)
