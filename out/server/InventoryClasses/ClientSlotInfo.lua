-- Compiled with roblox-ts v1.0.0-beta.14
local TS = require(game:GetService("ReplicatedStorage"):WaitForChild("rbxts_include"):WaitForChild("RuntimeLib"))
local Signal = TS.import(script, TS.getModule(script, "signal"))
local SlotChangeType = TS.import(script, game:GetService("ReplicatedStorage"), "TS", "SlotChangeType").SlotChangeType
local ClientSlotInfo
do
	ClientSlotInfo = setmetatable({}, {
		__tostring = function()
			return "ClientSlotInfo"
		end,
	})
	ClientSlotInfo.__index = ClientSlotInfo
	function ClientSlotInfo.new(...)
		local self = setmetatable({}, ClientSlotInfo)
		self:constructor(...)
		return self
	end
	function ClientSlotInfo:constructor(slot)
		self.slot = slot
		self.OnSlotInfoChanged = Signal.new()
		self.slot.OnSlotChanged:Connect(function(changeType)
			self.slotClientData.numStacks = self.slot:GetNumStacks()
			if changeType == SlotChangeType.ITEM_ADDED_ON_EMPTY then
				self:setItemData()
			end
			self.OnSlotInfoChanged:Fire()
		end)
		self.slotClientData = {
			itemName = "",
			iconID = (slot:GetItem() ~= nil) and (slot:GetItem()):GetIconID() or "DefaultIcon",
			itemDesc = "",
			numStacks = self.slot:GetNumStacks(),
		}
		self:setItemData()
	end
	function ClientSlotInfo:setItemData()
		local _0 = self.slot:GetItem()
		if _0 ~= nil then
			_0:Accept(self)
		end
	end
	function ClientSlotInfo:GetSlot()
		return self.slot
	end
	function ClientSlotInfo:GetSlotClientData()
		return self.slotClientData
	end
	function ClientSlotInfo:visitItem(item)
		print("entered here")
		self.slotClientData.itemName = item:GetItemName()
		self.slotClientData.itemDesc = item:GetItemDescription()
		self.slotClientData.iconID = item:GetIconID()
		print(self.slotClientData.itemDesc)
	end
	function ClientSlotInfo:visitEquippable(item)
		self:visitModelVisualizable(item)
	end
	function ClientSlotInfo:visitModelVisualizable(item)
		self:visitItem(item)
	end
	function ClientSlotInfo:visitHasEffectItem(item)
		self:visitEquippable(item)
		if self.slotClientData.effects == nil then
			self.slotClientData.effects = {}
		end
		local _0 = (self.slotClientData.effects)
		local _1 = item:GetEffectDescription()
		-- ▼ Array.push ▼
		_0[#_0 + 1] = _1
		-- ▲ Array.push ▲
	end
end
return {
	ClientSlotInfo = ClientSlotInfo,
}
