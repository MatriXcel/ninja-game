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
	function HasHealEffect:GetIconID()
		return self.equippable:GetIconID()
	end
	function HasHealEffect:GetEffectDescription()
		return self.healSpecDecorator:GetEffectDescription()
	end
	function HasHealEffect:Accept(visitor)
		visitor:visitHasEffectItem(self)
	end
	function HasHealEffect:GetItemName()
		return self.equippable:GetItemName()
	end
	function HasHealEffect:GetItemID()
		return self.equippable:GetItemID()
	end
	function HasHealEffect:GetItemDescription()
		return self.equippable:GetItemDescription()
	end
	function HasHealEffect:GetMaximumStacks()
		return self.equippable:GetMaximumStacks()
	end
end
return {
	HasHealEffect = HasHealEffect,
}
