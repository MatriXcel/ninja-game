-- Compiled with roblox-ts v1.0.0-beta.14
local TS = require(game:GetService("ReplicatedStorage"):WaitForChild("rbxts_include"):WaitForChild("RuntimeLib"))
local ModelVisualizable = TS.import(script, game:GetService("ServerScriptService"), "TS", "ItemClasses", "ModelVisualizable").ModelVisualizable
local ModelVisualizableSpecDecorator
do
	ModelVisualizableSpecDecorator = setmetatable({}, {
		__tostring = function()
			return "ModelVisualizableSpecDecorator"
		end,
	})
	ModelVisualizableSpecDecorator.__index = ModelVisualizableSpecDecorator
	function ModelVisualizableSpecDecorator.new(...)
		local self = setmetatable({}, ModelVisualizableSpecDecorator)
		self:constructor(...)
		return self
	end
	function ModelVisualizableSpecDecorator:constructor(itemSpec, model)
		self.itemSpec = itemSpec
		self.model = model
	end
	function ModelVisualizableSpecDecorator:GetIconID()
		return self.itemSpec:GetIconID()
	end
	function ModelVisualizableSpecDecorator:GetMaximumStacks()
		return self.itemSpec:GetMaximumStacks()
	end
	function ModelVisualizableSpecDecorator:GetItemID()
		return self.itemSpec:GetItemID()
	end
	function ModelVisualizableSpecDecorator:GetItemDescription()
		return self.itemSpec:GetItemDescription()
	end
	function ModelVisualizableSpecDecorator:GetItemName()
		return self.itemSpec:GetItemName()
	end
	function ModelVisualizableSpecDecorator:CreateItemFromSpec()
		return ModelVisualizable.new(self.itemSpec:CreateItemFromSpec(), self)
	end
end
return {
	ModelVisualizableSpecDecorator = ModelVisualizableSpecDecorator,
}
