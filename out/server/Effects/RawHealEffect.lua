-- Compiled with roblox-ts v1.0.0-beta.14
local RawHealEffect
do
	RawHealEffect = setmetatable({}, {
		__tostring = function()
			return "RawHealEffect"
		end,
	})
	RawHealEffect.__index = RawHealEffect
	function RawHealEffect.new(...)
		local self = setmetatable({}, RawHealEffect)
		self:constructor(...)
		return self
	end
	function RawHealEffect:constructor(healBuff)
		self.healBuff = healBuff
	end
	function RawHealEffect:ExecuteEffect(character)
	end
	function RawHealEffect:GetDescription()
		return "+${this.healBuff.GetValue()} Health"
	end
end
return {
	RawHealEffect = RawHealEffect,
}
