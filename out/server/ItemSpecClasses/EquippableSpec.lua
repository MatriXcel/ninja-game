-- Compiled with roblox-ts v1.0.0-beta.14
local TS = require(game:GetService("ReplicatedStorage"):WaitForChild("rbxts_include"):WaitForChild("RuntimeLib"))
local Equippable = TS.import(script, game:GetService("ServerScriptService"), "TS", "ItemClasses", "Equippable").Equippable
local EquippableSpecDecorator = TS.import(script, game:GetService("ServerScriptService"), "TS", "ItemSpecClasses", "EquippableSpecDecorator").EquippableSpecDecorator
local ItemSpec = TS.import(script, game:GetService("ServerScriptService"), "TS", "ItemSpecClasses", "ItemSpec").ItemSpec
local ModelVisualizableSpecDecorator = TS.import(script, game:GetService("ServerScriptService"), "TS", "ItemSpecClasses", "ModelVisualizableSpecDecorator").ModelVisualizableSpecDecorator
local EquippableSpec
do
	EquippableSpec = setmetatable({}, {
		__tostring = function()
			return "EquippableSpec"
		end,
	})
	EquippableSpec.__index = EquippableSpec
	function EquippableSpec.new(...)
		local self = setmetatable({}, EquippableSpec)
		self:constructor(...)
		return self
	end
	function EquippableSpec:constructor(model, itemName, itemDesc, maximumStacks, iconID)
		self.equippableSpecDecorator = EquippableSpecDecorator.new(ModelVisualizableSpecDecorator.new(ItemSpec.new(itemName, itemDesc, maximumStacks, iconID), model))
	end
	function EquippableSpec:CreateItemFromEquippableSpecDecorator()
		return self.equippableSpecDecorator:CreateItemFromEquippableSpecDecorator()
	end
	function EquippableSpec:CreateItemFromModelVisualizableSpecDecorator()
		return self.equippableSpecDecorator:CreateItemFromModelVisualizableSpecDecorator()
	end
	function EquippableSpec:CreateItemFromItemSpec()
		return self.equippableSpecDecorator:CreateItemFromItemSpec()
	end
	function EquippableSpec:GetItemName()
		return self.equippableSpecDecorator:GetItemName()
	end
	function EquippableSpec:GetItemID()
		return self.equippableSpecDecorator:GetItemID()
	end
	function EquippableSpec:GetItemDescription()
		return self.equippableSpecDecorator:GetItemDescription()
	end
	function EquippableSpec:CreateItemFromEquippableSpec()
		return self:CreateItemFromSpec()
	end
	function EquippableSpec:CreateItemFromSpec()
		return Equippable.new(self:CreateItemFromEquippableSpecDecorator(), self)
	end
end
return {
	EquippableSpec = EquippableSpec,
}
