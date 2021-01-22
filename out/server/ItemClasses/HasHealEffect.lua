-- Compiled with roblox-ts v1.0.0-beta.14
local HasHealEffect
do
	HasHealEffect = setmetatable({}, {
		__tostring = function()
			return "HasHealEffect"
		end,
	})
	HasHealEffect.__index = HasHealEffect
	function HasHealEffect.new(...)
		local self = setmetatable({}, HasHealEffect)
		self:constructor(...)
		return self
	end
	function HasHealEffect:constructor(equippable, healSpecDecorator)
		self.equippable = equippable
		self.healSpecDecorator = healSpecDecorator
	end
end
return {
	HasHealEffect = HasHealEffect,
}
