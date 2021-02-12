-- Compiled with roblox-ts v1.0.0-beta.14
local TS = require(game:GetService("ReplicatedStorage"):WaitForChild("rbxts_include"):WaitForChild("RuntimeLib"))
local Roact = TS.import(script, TS.getModule(script, "roact").roact.src)
local _0 = TS.import(script, TS.getModule(script, "roact-rodux").out)
local RoactRodux = _0
local StoreProvider = _0.StoreProvider
local Rodux = TS.import(script, TS.getModule(script, "rodux").rodux.lib)
local _1 = TS.import(script, TS.getModule(script, "services"))
local Players = _1.Players
local RS = _1.ReplicatedStorage
local InventoryUI = TS.import(script, script.Parent, "inventory").InventoryUI
local playerGui = Players.LocalPlayer:WaitForChild("PlayerGui")
local handle
local invProps = {
	slotDisplayDatas = {},
}
RS.RemoteEvents.ServerToClient.OnInventoryInit.OnClientEvent:Connect(function(clientInvData)
	local store = Rodux.Store.new(Rodux.createReducer("hello", {
		handler = function(state, action)
			return state
		end,
	}))
	invProps.slotDisplayDatas = clientInvData
	local _2 = {
		store = store,
	}
	local _3 = {}
	local _4 = #_3
	local _5 = {}
	for _6, _7 in pairs(invProps) do
		_5[_6] = _7
	end
	_3[_4 + 1] = Roact.createElement(InventoryUI, _5)
	local app = Roact.createElement(StoreProvider, _2, _3)
	handle = Roact.mount(app, playerGui:FindFirstChild("ScreenGui"), "StoreProvider")
	local NewInventoryComponent = RoactRodux.connect(function(state, props)
		return props
	end)(InventoryUI)
end)
RS.RemoteEvents.ServerToClient.OnSlotChanged.OnClientEvent:Connect(function(slotNumber, clientSlotData)
	invProps.slotDisplayDatas[slotNumber + 1] = clientSlotData
	local _2 = Roact
	local _3 = handle
	local _4 = {}
	for _5, _6 in pairs(invProps) do
		_4[_5] = _6
	end
	_2.update(_3, Roact.createElement(InventoryUI, _4))
end)
