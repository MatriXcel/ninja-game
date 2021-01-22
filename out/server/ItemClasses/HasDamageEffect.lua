-- Compiled with roblox-ts v1.0.0-beta.14
local HasDamageEffect
do
	HasDamageEffect = setmetatable({}, {
		__tostring = function()
			return "HasDamageEffect"
		end,
	})
	HasDamageEffect.__index = HasDamageEffect
	function HasDamageEffect.new(...)
		local self = setmetatable({}, HasDamageEffect)
		self:constructor(...)
		return self
	end
	function HasDamageEffect:constructor(equippable, damageSpecDecorator)
		self.equippable = equippable
		self.damageSpecDecorator = damageSpecDecorator
	end
end
return {
	HasDamageEffect = HasDamageEffect,
}
