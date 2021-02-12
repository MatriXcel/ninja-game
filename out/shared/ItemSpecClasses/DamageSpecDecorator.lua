-- Compiled with roblox-ts v1.0.0-beta.14
local TS = require(game:GetService("ReplicatedStorage"):WaitForChild("rbxts_include"):WaitForChild("RuntimeLib"))
local ItemFactory = TS.import(script, game:GetService("ReplicatedStorage"), "TS", "ItemFactory").ItemFactory
local DamageSpecDecorator
do
	DamageSpecDecorator = setmetatable({}, {
		__tostring = function()
			return "DamageSpecDecorator"
		end,
	})
	DamageSpecDecorator.__index = DamageSpecDecorator
	function DamageSpecDecorator.new(...)
		local self = setmetatable({}, DamageSpecDecorator)
		self:constructor(...)
		return self
	end
	function DamageSpecDecorator:constructor(equippableSpecDecorator, damageEffect)
		self.equippableSpecDecorator = equippableSpecDecorator
		self.damageEffect = damageEffect
	end
	function DamageSpecDecorator:GetIconID()
		return self.equippableSpecDecorator:GetIconID()
	end
	function DamageSpecDecorator:GetEffectDescription()
		return self.damageEffect:GetDescription()
	end
	function DamageSpecDecorator:GetHealEffect()
		return self.damageEffect
	end
	function DamageSpecDecorator:GetMaximumStacks()
		return self.equippableSpecDecorator:GetMaximumStacks()
	end
	function DamageSpecDecorator:CreateItemFromSpec()
		return ItemFactory:GetInstance():CreateHasDamageEffect(self)
	end
	function DamageSpecDecorator:GetItemName()
		return self.equippableSpecDecorator:GetItemName()
	end
	function DamageSpecDecorator:GetItemID()
		return self.equippableSpecDecorator:GetItemID()
	end
	function DamageSpecDecorator:GetItemDescription()
		return self.equippableSpecDecorator:GetItemDescription()
	end
end
return {
	DamageSpecDecorator = DamageSpecDecorator,
}
