-- Compiled with roblox-ts v1.0.0-beta.14
local TS = require(game:GetService("ReplicatedStorage"):WaitForChild("rbxts_include"):WaitForChild("RuntimeLib"))
local Equippable = TS.import(script, game:GetService("ReplicatedStorage"), "TS", "ItemClasses", "Equippable").Equippable
local HasDamageEffect = TS.import(script, game:GetService("ReplicatedStorage"), "TS", "ItemClasses", "HasDamageEffect").HasDamageEffect
local HasHealEffect = TS.import(script, game:GetService("ReplicatedStorage"), "TS", "ItemClasses", "HasHealEffect").HasHealEffect
local Item = TS.import(script, game:GetService("ReplicatedStorage"), "TS", "ItemClasses", "Item").Item
local ModelVisualizable = TS.import(script, game:GetService("ReplicatedStorage"), "TS", "ItemClasses", "ModelVisualizable").ModelVisualizable
local ItemFactory
do
	ItemFactory = setmetatable({}, {
		__tostring = function()
			return "ItemFactory"
		end,
	})
	ItemFactory.__index = ItemFactory
	function ItemFactory.new(...)
		local self = setmetatable({}, ItemFactory)
		self:constructor(...)
		return self
	end
	function ItemFactory:constructor()
		self.instances = {}
		ItemFactory.ID = 0
	end
	function ItemFactory:GetInstance()
		if ItemFactory.instance == nil then
			ItemFactory.instance = ItemFactory.new()
		end
		return ItemFactory.instance
	end
	function ItemFactory:CreateItem(itemSpec)
		local newInstance = Item.new(itemSpec, ItemFactory.ID)
		local _0 = self.instances
		local _1 = ItemFactory.ID
		ItemFactory.ID += 1
		_0[_1 + 1] = newInstance
		return newInstance
	end
	function ItemFactory:GetInstanceByID(instanceID)
		return self.instances[instanceID + 1]
	end
	function ItemFactory:CreateModelVisualizable(modelVisualizableSpecDecorator)
		return ModelVisualizable.new(self:CreateItem(modelVisualizableSpecDecorator), modelVisualizableSpecDecorator)
	end
	function ItemFactory:CreateEquippable(equippableSpecDecorator)
		return Equippable.new(self:CreateModelVisualizable(equippableSpecDecorator), equippableSpecDecorator)
	end
	function ItemFactory:CreateHasHealEffect(healSpecDecorator)
		return HasHealEffect.new(self:CreateEquippable(healSpecDecorator), healSpecDecorator)
	end
	function ItemFactory:CreateHasDamageEffect(damageSpecDecorator)
		return HasDamageEffect.new(self:CreateEquippable(damageSpecDecorator), damageSpecDecorator)
	end
end
return {
	ItemFactory = ItemFactory,
}
