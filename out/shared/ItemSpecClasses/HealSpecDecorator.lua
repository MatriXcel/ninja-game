-- Compiled with roblox-ts v1.0.0-beta.14
local TS = require(game:GetService("ReplicatedStorage"):WaitForChild("rbxts_include"):WaitForChild("RuntimeLib"))
local ItemFactory = TS.import(script, game:GetService("ReplicatedStorage"), "TS", "ItemFactory").ItemFactory
local HealSpecDecorator
do
	HealSpecDecorator = setmetatable({}, {
		__tostring = function()
			return "HealSpecDecorator"
		end,
	})
	HealSpecDecorator.__index = HealSpecDecorator
	function HealSpecDecorator.new(...)
		local self = setmetatable({}, HealSpecDecorator)
		self:constructor(...)
		return self
	end
	function HealSpecDecorator:constructor(equippableSpecDecorator, healEffect)
		self.equippableSpecDecorator = equippableSpecDecorator
		self.healEffect = healEffect
	end
	function HealSpecDecorator:GetIconID()
		return self.equippableSpecDecorator:GetIconID()
	end
	function HealSpecDecorator:GetEffectDescription()
		return self.healEffect:GetDescription()
	end
	function HealSpecDecorator:GetMaximumStacks()
		return self.equippableSpecDecorator:GetMaximumStacks()
	end
	function HealSpecDecorator:GetItemName()
		return self.equippableSpecDecorator:GetItemName()
	end
	function HealSpecDecorator:GetItemID()
		return self.equippableSpecDecorator:GetItemID()
	end
	function HealSpecDecorator:GetItemDescription()
		return self.equippableSpecDecorator:GetItemDescription()
	end
	function HealSpecDecorator:CreateItemFromSpec()
		return ItemFactory:GetInstance():CreateHasHealEffect(self)
	end
end
return {
	HealSpecDecorator = HealSpecDecorator,
}
