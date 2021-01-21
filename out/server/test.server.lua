-- Compiled with roblox-ts v1.0.0-beta.14
local TS = require(game:GetService("ReplicatedStorage"):WaitForChild("rbxts_include"):WaitForChild("RuntimeLib"))
local RawBonus = TS.import(script, game:GetService("ServerScriptService"), "TS", "AttributeClasses", "RawBonus").RawBonus
local RawHealEffect = TS.import(script, game:GetService("ServerScriptService"), "TS", "Effects", "RawHealEffect").RawHealEffect
local EquippableSpec = TS.import(script, game:GetService("ServerScriptService"), "TS", "ItemSpecClasses", "EquippableSpec").EquippableSpec
local HealSpecDecorator = TS.import(script, game:GetService("ServerScriptService"), "TS", "ItemSpecClasses", "HealSpecDecorator").HealSpecDecorator
local holySword = HealSpecDecorator.new(EquippableSpec.new(Instance.new("Model"), "Holy Sword", "a holy sword of the paladins", 20), RawHealEffect.new(RawBonus.new(10, 0)))
local holySwordInstance = holySword:CreateItemFromSpec()
