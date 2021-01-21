-- Compiled with roblox-ts v1.0.0-beta.14
local BaseAttribute
do
	BaseAttribute = setmetatable({}, {
		__tostring = function()
			return "BaseAttribute"
		end,
	})
	BaseAttribute.__index = BaseAttribute
	function BaseAttribute.new(...)
		local self = setmetatable({}, BaseAttribute)
		self:constructor(...)
		return self
	end
	function BaseAttribute:constructor(value, multiplier)
		self.baseValue = value
		self.baseMultiplier = multiplier
	end
	function BaseAttribute:GetValue()
		return self.baseValue
	end
	function BaseAttribute:GetMultiplier()
		return self.baseMultiplier
	end
end
return {
	BaseAttribute = BaseAttribute,
}
