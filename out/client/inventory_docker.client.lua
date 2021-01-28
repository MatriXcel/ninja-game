-- Compiled with roblox-ts v1.0.0-beta.14
local TS = require(game:GetService("ReplicatedStorage"):WaitForChild("rbxts_include"):WaitForChild("RuntimeLib"))
local Roact = TS.import(script, TS.getModule(script, "roact").roact.src)
local _0 = TS.import(script, TS.getModule(script, "services"))
local Players = _0.Players
local RS = _0.ReplicatedStorage
local InventoryUI = TS.import(script, script.Parent, "inventory")
local playerGui = Players.LocalPlayer:FindFirstChild("PlayerGui")
RS.RemoteEvents.ServerToClient.OnInventoryInit.OnClientEvent:Connect(function(clientInvData)
	print(clientInvData)
	local invComponent = Roact.createElement(InventoryUI.InventoryComponent, {
		slotDisplayDatas = clientInvData,
	})
	Roact.mount(invComponent, playerGui, "UI")
end)
