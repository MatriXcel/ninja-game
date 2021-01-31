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
local InventoryUI = TS.import(script, script.Parent, "inventory")
local playerGui = Players.LocalPlayer:WaitForChild("PlayerGui")
local invData = {}
local handle
RS.RemoteEvents.ServerToClient.OnInventoryInit.OnClientEvent:Connect(function(clientInvData)
	invData = clientInvData
	local store = Rodux.Store.new(Rodux.createReducer("hello", {
		handler = function(state, action)
			return state
		end,
	}))
	local app = Roact.createElement(StoreProvider, {
		store = store,
	}, {
		Roact.createElement(InventoryUI.InventoryComponent, {
			slotDisplayDatas = invData,
		}),
	})
	handle = Roact.mount(app, playerGui:FindFirstChild("ScreenGui"), "StoreProvider")
	local NewInventoryComponent = RoactRodux.connect(function(state, props)
		print("STATE HAS CHANGED")
		return props
	end)(InventoryUI.InventoryComponent)
end)
RS.RemoteEvents.ServerToClient.OnSlotChanged.OnClientEvent:Connect(function(slotNumber, clientSlotData)
	invData[slotNumber + 1] = clientSlotData
	print("SLOT CHANGED ON THE CLIENT END")
	Roact.update(handle, Roact.createElement(InventoryUI.InventoryComponent, {
		slotDisplayDatas = invData,
	}))
end)
