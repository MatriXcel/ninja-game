-- Compiled with roblox-ts v1.0.0-beta.14
local TS = require(game:GetService("ReplicatedStorage"):WaitForChild("rbxts_include"):WaitForChild("RuntimeLib"))
local ItemFactory = TS.import(script, game:GetService("ReplicatedStorage"), "TS", "ItemFactory").ItemFactory
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
		if iconID == nil then
			iconID = "DefaultIcon"
		end
		self.itemName = itemName
		self.maximumStacks = maximumStacks
		self.iconID = iconID
		self.id = ItemSpec.ID
		ItemSpec.ID += 1
		print(itemName .. " has ID " .. tostring(self.id))
		self.itemDesc = itemDesc
	end
	function ItemSpec:GetIconID()
		return self.iconID
	end
	function ItemSpec:CreateItemFromSpec()
		return ItemFactory:GetInstance():CreateItem(self)
	end
	function ItemSpec:GetMaximumStacks()
		return self.maximumStacks
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
	ItemSpec.ID = 0
end
return {
	ItemSpec = ItemSpec,
}
