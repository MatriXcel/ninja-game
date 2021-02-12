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
	function Equippable:GetInstanceID()
		return self.modelVisualizable:GetInstanceID()
	end
	function Equippable:GetIconID()
		return self.modelVisualizable:GetIconID()
	end
	function Equippable:Accept(visitor)
		visitor:visitModelVisualizable(self)
	end
	function Equippable:GetItemName()
		return self.modelVisualizable:GetItemName()
	end
	function Equippable:GetItemID()
		return self.modelVisualizable:GetItemID()
	end
	function Equippable:GetItemDescription()
		return self.modelVisualizable:GetItemDescription()
	end
	function Equippable:GetMaximumStacks()
		return self.modelVisualizable:GetMaximumStacks()
	end
end
return {
	Equippable = Equippable,
}
