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
				self.slotClientData.itemID = (self.slot:GetItem()):GetItemID()
			end
			self.OnSlotInfoChanged:Fire()
		end)
		local _0 = {}
		local _1 = "itemID"
		local _2 = self.slot:GetItem()
		if _2 ~= nil then
			_2 = _2:GetItemID()
		end
		_0[_1] = _2
		_0.numStacks = self.slot:GetNumStacks()
		self.slotClientData = _0
		print("from clientslotinfo " .. tostring(self.slotClientData.itemID))
		-- itemName: "",
		-- iconID: (slot.GetItem() !== undefined) ? (slot.GetItem() as IItem).GetIconID() : "DefaultIcon",
		-- itemDesc: "",
		-- this.setItemData();
	end
	function ClientSlotInfo:setItemData()
	end
	function ClientSlotInfo:GetSlot()
		return self.slot
	end
	function ClientSlotInfo:GetSlotClientData()
		return self.slotClientData
	end
	function ClientSlotInfo:visitItem(item)
		print("entered here")
		-- this.slotClientData.itemName = item.GetItemName();
		-- this.slotClientData.itemDesc = item.GetItemDescription();
		-- this.slotClientData.iconID = item.GetIconID();
		-- print(this.slotClientData.itemDesc);
	end
	function ClientSlotInfo:visitEquippable(item)
	end
	function ClientSlotInfo:visitModelVisualizable(item)
	end
	function ClientSlotInfo:visitHasEffectItem(item)
	end
end
return {
	ClientSlotInfo = ClientSlotInfo,
}
