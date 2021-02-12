-- Compiled with roblox-ts v1.0.0-beta.14
local TS = require(game:GetService("ReplicatedStorage"):WaitForChild("rbxts_include"):WaitForChild("RuntimeLib"))
local Signal = TS.import(script, TS.getModule(script, "signal"))
local ItemFactory = TS.import(script, game:GetService("ReplicatedStorage"), "TS", "ItemFactory").ItemFactory
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
	function ItemSlot:constructor(instanceID, numStacks)
		if numStacks == nil then
			numStacks = 0
		end
		self.instanceID = instanceID
		self.numStacks = numStacks
		self.OnSlotChanged = Signal.new()
	end
	function ItemSlot:GetNumStacks()
		return self.numStacks
	end
	function ItemSlot:GetInstanceByID()
		return ItemFactory:GetInstance():GetInstanceByID(self.instanceID)
	end
	function ItemSlot:CanAddStack(targetInstanceID, amount)
		if amount == nil then
			amount = 1
		end
		local targetItemID = ItemFactory:GetInstance():GetInstanceByID(targetInstanceID):GetItemID()
		local instanceItemID = (self.instanceID ~= nil) and self:GetInstanceByID():GetItemID() or nil
		return instanceItemID == nil or (targetItemID == instanceItemID and self.numStacks + amount <= self:GetInstanceByID():GetMaximumStacks())
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
		local _0
		if (self.instanceID == nil) then
			_0 = nil
		else
			_0 = self:GetInstanceByID()
		end
		return _0
	end
	function ItemSlot:SetItem(instanceID)
		self.instanceID = instanceID
	end
end
return {
	ItemSlot = ItemSlot,
}
