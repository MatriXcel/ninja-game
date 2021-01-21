-- Compiled with roblox-ts v1.0.0-beta.14
local TS = require(game:GetService("ReplicatedStorage"):WaitForChild("rbxts_include"):WaitForChild("RuntimeLib"))
local HasHeal = TS.import(script, game:GetService("ServerScriptService"), "TS", "ItemClasses", "HasHeal").HasHeal
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
	function HealSpecDecorator:CreateItemFromEquippableSpecDecorator()
		return self.equippableSpecDecorator:CreateItemFromEquippableSpecDecorator()
	end
	function HealSpecDecorator:CreateItemFromModelVisualizableSpecDecorator()
		return self.equippableSpecDecorator:CreateItemFromModelVisualizableSpecDecorator()
	end
	function HealSpecDecorator:CreateItemFromItemSpec()
		return self.equippableSpecDecorator:CreateItemFromItemSpec()
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
	function HealSpecDecorator:CreateItemFromHasHealSpecDecorator()
		return self:CreateItemFromSpec()
	end
	function HealSpecDecorator:CreateItemFromSpec()
		return HasHeal.new(self:CreateItemFromEquippableSpecDecorator(), self)
	end
end
return {
	HealSpecDecorator = HealSpecDecorator,
}
