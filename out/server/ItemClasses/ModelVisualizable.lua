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
end
return {
	ModelVisualizable = ModelVisualizable,
}
