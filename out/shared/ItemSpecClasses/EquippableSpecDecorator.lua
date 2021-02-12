-- Compiled with roblox-ts v1.0.0-beta.14
local TS = require(game:GetService("ReplicatedStorage"):WaitForChild("rbxts_include"):WaitForChild("RuntimeLib"))
local ItemFactory = TS.import(script, game:GetService("ReplicatedStorage"), "TS", "ItemFactory").ItemFactory
local EquippableSpecDecorator
do
	EquippableSpecDecorator = setmetatable({}, {
		__tostring = function()
			return "EquippableSpecDecorator"
		end,
	})
	EquippableSpecDecorator.__index = EquippableSpecDecorator
	function EquippableSpecDecorator.new(...)
		local self = setmetatable({}, EquippableSpecDecorator)
		self:constructor(...)
		return self
	end
	function EquippableSpecDecorator:constructor(modelVisualizableSpec)
		self.modelVisualizableSpec = modelVisualizableSpec
	end
	function EquippableSpecDecorator:GetIconID()
		return self.modelVisualizableSpec:GetIconID()
	end
	function EquippableSpecDecorator:GetMaximumStacks()
		return self.modelVisualizableSpec:GetMaximumStacks()
	end
	function EquippableSpecDecorator:CreateItemFromSpec()
		return ItemFactory:GetInstance():CreateEquippable(self)
	end
	function EquippableSpecDecorator:GetItemName()
		return self.modelVisualizableSpec:GetItemName()
	end
	function EquippableSpecDecorator:GetItemID()
		return self.modelVisualizableSpec:GetItemID()
	end
	function EquippableSpecDecorator:GetItemDescription()
		return self.modelVisualizableSpec:GetItemDescription()
	end
end
return {
	EquippableSpecDecorator = EquippableSpecDecorator,
}
