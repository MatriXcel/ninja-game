-- Compiled with roblox-ts v1.0.0-beta.14
local Equippable
do
	Equippable = setmetatable({}, {
		__tostring = function()
			return "Equippable"
		end,
	})
	Equippable.__index = Equippable
	function Equippable.new(...)
		local self = setmetatable({}, Equippable)
		self:constructor(...)
		return self
	end
	function Equippable:constructor(modelVisualizable, equippableSpecDecorator)
		self.equippableSpecDecorator = equippableSpecDecorator
		self.modelVisualizable = modelVisualizable
	end
end
return {
	Equippable = Equippable,
}
