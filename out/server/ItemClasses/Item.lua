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
	function Item:constructor(itemSpec)
		self.itemSpec = itemSpec
	end
end
return {
	Item = Item,
}
