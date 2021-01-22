-- Compiled with roblox-ts v1.0.0-beta.14
local TS = require(game:GetService("ReplicatedStorage"):WaitForChild("rbxts_include"):WaitForChild("RuntimeLib"))
local HasDamageEffect = TS.import(script, game:GetService("ServerScriptService"), "TS", "ItemClasses", "HasDamageEffect").HasDamageEffect
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
	function DamageSpecDecorator:CreateItemFromSpec()
		return HasDamageEffect.new(self.equippableSpecDecorator:CreateItemFromSpec(), self)
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
