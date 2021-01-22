-- Compiled with roblox-ts v1.0.0-beta.14
local TS = require(game:GetService("ReplicatedStorage"):WaitForChild("rbxts_include"):WaitForChild("RuntimeLib"))
local HasHealEffect = TS.import(script, game:GetService("ServerScriptService"), "TS", "ItemClasses", "HasHealEffect").HasHealEffect
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
		return HasHealEffect.new(self.equippableSpecDecorator:CreateItemFromSpec(), self)
	end
end
return {
	HealSpecDecorator = HealSpecDecorator,
}
