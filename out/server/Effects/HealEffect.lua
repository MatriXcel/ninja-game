-- Compiled with roblox-ts v1.0.0-beta.14
local HealEffect
do
	HealEffect = setmetatable({}, {
		__tostring = function()
			return "HealEffect"
		end,
	})
	HealEffect.__index = HealEffect
	function HealEffect.new(...)
		local self = setmetatable({}, HealEffect)
		self:constructor(...)
		return self
	end
	function HealEffect:constructor(healBuff)
		self.healBuff = healBuff
	end
	function HealEffect:ExecuteEffect(character)
	end
	function HealEffect:GetDescription()
		return "+${this.healBuff.GetValue()} Health"
	end
end
return {
	HealEffect = HealEffect,
}
