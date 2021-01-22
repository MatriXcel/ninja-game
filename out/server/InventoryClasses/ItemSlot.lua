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
		self.item = item
		self.numStacks = numStacks
	end
end
return {
	ItemSlot = ItemSlot,
}
