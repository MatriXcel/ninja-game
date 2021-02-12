-- Compiled with roblox-ts v1.0.0-beta.14
local DamageEffect
do
	DamageEffect = setmetatable({}, {
		__tostring = function()
			return "DamageEffect"
		end,
	})
	DamageEffect.__index = DamageEffect
	function DamageEffect.new(...)
		local self = setmetatable({}, DamageEffect)
		self:constructor(...)
		return self
	end
	function DamageEffect:constructor(damageAmount)
		self.damageAmount = damageAmount
	end
	function DamageEffect:ExecuteEffect(character)
	end
	function DamageEffect:GetDescription()
		return "+${this.damageAmount} Damage"
	end
end
return {
	DamageEffect = DamageEffect,
}
