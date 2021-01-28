-- Compiled with roblox-ts v1.0.0-beta.14
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
		self.numStacks += numStacks
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
