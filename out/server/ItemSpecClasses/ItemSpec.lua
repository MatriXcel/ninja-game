-- Compiled with roblox-ts v1.0.0-beta.14
local TS = require(game:GetService("ReplicatedStorage"):WaitForChild("rbxts_include"):WaitForChild("RuntimeLib"))
local Item = TS.import(script, game:GetService("ServerScriptService"), "TS", "ItemClasses", "Item").Item
local ItemSpec
do
	ItemSpec = setmetatable({}, {
		__tostring = function()
			return "ItemSpec"
		end,
	})
	ItemSpec.__index = ItemSpec
	function ItemSpec.new(...)
		local self = setmetatable({}, ItemSpec)
		self:constructor(...)
		return self
	end
	function ItemSpec:constructor(itemName, itemDesc, maximumStacks, iconID)
		self.itemName = itemName
		self.maximumStacks = maximumStacks
		self.iconID = iconID
		ItemSpec.ID += 1
		self.id = ItemSpec.ID
		self.itemDesc = itemDesc
	end
	function ItemSpec:CreateItemFromSpec()
		return Item.new(self)
	end
	function ItemSpec:GetItemName()
		return self.itemName
	end
	function ItemSpec:GetItemID()
		return self.id
	end
	function ItemSpec:GetItemDescription()
		return self.itemDesc
	end
end
return {
	ItemSpec = ItemSpec,
}
