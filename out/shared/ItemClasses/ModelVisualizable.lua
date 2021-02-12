-- Compiled with roblox-ts v1.0.0-beta.14
local ModelVisualizable
do
	ModelVisualizable = setmetatable({}, {
		__tostring = function()
			return "ModelVisualizable"
		end,
	})
	ModelVisualizable.__index = ModelVisualizable
	function ModelVisualizable.new(...)
		local self = setmetatable({}, ModelVisualizable)
		self:constructor(...)
		return self
	end
	function ModelVisualizable:constructor(item, modelVisualizableSpecDecorator)
		self.item = item
		self.modelVisualizableSpecDecorator = modelVisualizableSpecDecorator
	end
	function ModelVisualizable:GetInstanceID()
		return self.item:GetInstanceID()
	end
	function ModelVisualizable:GetIconID()
		return self.modelVisualizableSpecDecorator:GetIconID()
	end
	function ModelVisualizable:Accept(visitor)
		visitor:visitModelVisualizable(self)
	end
	function ModelVisualizable:GetItemName()
		return self.item:GetItemName()
	end
	function ModelVisualizable:GetItemID()
		return self.item:GetItemID()
	end
	function ModelVisualizable:GetItemDescription()
		return self.item:GetItemDescription()
	end
	function ModelVisualizable:GetMaximumStacks()
		return self.item:GetMaximumStacks()
	end
end
return {
	ModelVisualizable = ModelVisualizable,
}
