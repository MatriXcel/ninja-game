-- Compiled with roblox-ts v1.0.0-beta.14
local TS = require(game:GetService("ReplicatedStorage"):WaitForChild("rbxts_include"):WaitForChild("RuntimeLib"))
local Equippable = TS.import(script, game:GetService("ServerScriptService"), "TS", "ItemClasses", "Equippable").Equippable
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
	function EquippableSpecDecorator:CreateItemFromSpec()
		return Equippable.new(self:CreateItemFromSpec(), self)
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
