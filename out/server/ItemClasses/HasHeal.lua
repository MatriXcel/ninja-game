-- Compiled with roblox-ts v1.0.0-beta.14
local HasHeal
do
	HasHeal = setmetatable({}, {
		__tostring = function()
			return "HasHeal"
		end,
	})
	HasHeal.__index = HasHeal
	function HasHeal.new(...)
		local self = setmetatable({}, HasHeal)
		self:constructor(...)
		return self
	end
	function HasHeal:constructor(equippable, healSpecDecorator)
		self.equippable = equippable
		self.healSpecDecorator = healSpecDecorator
	end
end
return {
	HasHeal = HasHeal,
}
