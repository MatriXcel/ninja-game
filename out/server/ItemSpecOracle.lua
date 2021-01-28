-- Compiled with roblox-ts v1.0.0-beta.14
local TS = require(game:GetService("ReplicatedStorage"):WaitForChild("rbxts_include"):WaitForChild("RuntimeLib"))
local DamageEffect = TS.import(script, game:GetService("ServerScriptService"), "TS", "Effects", "DamageEffect").DamageEffect
local DamageSpecDecorator = TS.import(script, game:GetService("ServerScriptService"), "TS", "ItemSpecClasses", "DamageSpecDecorator").DamageSpecDecorator
local EquippableSpec = TS.import(script, game:GetService("ServerScriptService"), "TS", "ItemSpecClasses", "EquippableSpec").EquippableSpec
local ItemSpecOracle
do
	ItemSpecOracle = setmetatable({}, {
		__tostring = function()
			return "ItemSpecOracle"
		end,
	})
	ItemSpecOracle.__index = ItemSpecOracle
	function ItemSpecOracle.new(...)
		local self = setmetatable({}, ItemSpecOracle)
		self:constructor(...)
		return self
	end
	function ItemSpecOracle:constructor()
		self.itemSpecDatabase = { DamageSpecDecorator.new(EquippableSpec.new(Instance.new("Model"), "Warrior Sword", "a holy sword of the paladins", 20), DamageEffect.new(10)) }
	end
	function ItemSpecOracle:GetInstance()
		if ItemSpecOracle.instance == nil then
			ItemSpecOracle.instance = ItemSpecOracle.new()
		end
		return ItemSpecOracle.instance
	end
	function ItemSpecOracle:GetSpecByName(itemName)
		local finalItem = nil
		local _0 = self.itemSpecDatabase
		local _1 = function(item)
			if item:GetItemName() == itemName then
				finalItem = item
				return nil
			end
		end
		-- ▼ ReadonlyArray.forEach ▼
		for _2, _3 in ipairs(_0) do
			_1(_3, _2 - 1, _0)
		end
		-- ▲ ReadonlyArray.forEach ▲
		return finalItem
	end
	function ItemSpecOracle:GetSpecByID(itemID)
		local _0 = self.itemSpecDatabase
		local _1 = function(item)
			if item:GetItemID() == itemID then
				return item
			end
		end
		-- ▼ ReadonlyArray.forEach ▼
		for _2, _3 in ipairs(_0) do
			_1(_3, _2 - 1, _0)
		end
		-- ▲ ReadonlyArray.forEach ▲
		return nil
	end
end
return {
	ItemSpecOracle = ItemSpecOracle,
}
