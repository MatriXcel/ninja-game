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
	function HasDamageEffect:GetInstanceID()
		return self.equippable:GetInstanceID()
	end
	function HasDamageEffect:GetIconID()
		return self.equippable:GetIconID()
	end
	function HasDamageEffect:GetEffectDescription()
		return self.damageSpecDecorator:GetEffectDescription()
	end
	function HasDamageEffect:Accept(visitor)
		visitor:visitHasEffectItem(self)
	end
	function HasDamageEffect:GetItemName()
		return self.equippable:GetItemName()
	end
	function HasDamageEffect:GetItemID()
		return self.equippable:GetItemID()
	end
	function HasDamageEffect:GetItemDescription()
		return self.equippable:GetItemDescription()
	end
	function HasDamageEffect:GetMaximumStacks()
		return self.equippable:GetMaximumStacks()
	end
end
return {
	HasDamageEffect = HasDamageEffect,
}
