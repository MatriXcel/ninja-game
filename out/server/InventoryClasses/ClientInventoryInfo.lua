-- Compiled with roblox-ts v1.0.0-beta.14
local TS = require(game:GetService("ReplicatedStorage"):WaitForChild("rbxts_include"):WaitForChild("RuntimeLib"))
local Signal = TS.import(script, TS.getModule(script, "signal"))
local ClientSlotInfo = TS.import(script, game:GetService("ServerScriptService"), "TS", "InventoryClasses", "ClientSlotInfo").ClientSlotInfo
local ClientInventoryInfo
do
	ClientInventoryInfo = setmetatable({}, {
		__tostring = function()
			return "ClientInventoryInfo"
		end,
	})
	ClientInventoryInfo.__index = ClientInventoryInfo
	function ClientInventoryInfo.new(...)
		local self = setmetatable({}, ClientInventoryInfo)
		self:constructor(...)
		return self
	end
	function ClientInventoryInfo:constructor(inventory)
		self.clientSlotInfos = {}
		self.OnInventorySlotInfoChanged = Signal.new()
		do
			local _0 = 0
			while _0 < #inventory:GetSlots() do
				local i = _0
				self.clientSlotInfos[i + 1] = ClientSlotInfo.new(inventory:GetSlotAtIndex(i))
				self.clientSlotInfos[i + 1].OnSlotInfoChanged:Connect(function()
					self.OnInventorySlotInfoChanged:Fire(i, self.clientSlotInfos[i + 1]:GetSlotClientData())
				end)
				_0 = i
				_0 += 1
			end
		end
	end
	function ClientInventoryInfo:GetSlotClientDatas()
		local _0 = self.clientSlotInfos
		local _1 = function(info)
			return info:GetSlotClientData()
		end
		-- ▼ ReadonlyArray.map ▼
		local _2 = table.create(#_0)
		for _3, _4 in ipairs(_0) do
			_2[_3] = _1(_4, _3 - 1, _0)
		end
		-- ▲ ReadonlyArray.map ▲
		return _2
	end
end
return {
	ClientInventoryInfo = ClientInventoryInfo,
}
