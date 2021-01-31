-- Compiled with roblox-ts v1.0.0-beta.14
local TS = require(game:GetService("ReplicatedStorage"):WaitForChild("rbxts_include"):WaitForChild("RuntimeLib"))
local Signal = TS.import(script, TS.getModule(script, "signal"))
local SlotChangeType = TS.import(script, game:GetService("ReplicatedStorage"), "TS", "SlotChangeType").SlotChangeType
local ItemSlot
do
	ItemSlot = setmetatable({}, {
		__tostring = function()
			return "ItemSlot"
		end,
	})
	ItemSlot.__index = ItemSlot
	function ItemSlot.new(...)
		local self = setmetatable({}, ItemSlot)
		self:constructor(...)
		return self
	end
	function ItemSlot:constructor(item, numStacks)
		if numStacks == nil then
			numStacks = 0
		end
		self.item = item
		self.numStacks = numStacks
		self.OnSlotChanged = Signal.new()
	end
	function ItemSlot:GetNumStacks()
		return self.numStacks
	end
	function ItemSlot:CanAddStack(item, amount)
		if amount == nil then
			amount = 1
		end
		return self.item ~= nil and self.item:GetItemID() == item:GetItemID() and self.numStacks + amount <= self.item:GetMaximumStacks()
	end
	function ItemSlot:AddStack(numStacks)
		if numStacks == nil then
			numStacks = 1
		end
		if numStacks == 0 then
			return nil
		end
		self.numStacks += numStacks
		if self.numStacks - numStacks == 0 then
			self.OnSlotChanged:Fire(SlotChangeType.ITEM_ADDED_ON_EMPTY)
		else
			self.OnSlotChanged:Fire(SlotChangeType.ITEM_ADDED)
		end
	end
	function ItemSlot:GetItem()
		return self.item
	end
	function ItemSlot:SetItem(item)
		self.item = item
	end
end
return {
	ItemSlot = ItemSlot,
}
