-- Compiled with roblox-ts v1.0.0-beta.14
local Item
do
	Item = setmetatable({}, {
		__tostring = function()
			return "Item"
		end,
	})
	Item.__index = Item
	function Item.new(...)
		local self = setmetatable({}, Item)
		self:constructor(...)
		return self
	end
	function Item:constructor(itemSpec, instanceID)
		self.itemSpec = itemSpec
		self.instanceID = instanceID
	end
	function Item:GetInstanceID()
		return self.instanceID
	end
	function Item:GetIconID()
		return self.itemSpec:GetIconID()
	end
	function Item:Accept(visitor)
		visitor:visitItem(self)
	end
	function Item:GetItemID()
		return self.itemSpec:GetItemID()
	end
	function Item:GetItemDescription()
		return self.itemSpec:GetItemDescription()
	end
	function Item:GetItemName()
		return self.itemSpec:GetItemName()
	end
	function Item:GetMaximumStacks()
		return self.itemSpec:GetMaximumStacks()
	end
end
return {
	Item = Item,
}
