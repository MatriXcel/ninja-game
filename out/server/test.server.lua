-- Compiled with roblox-ts v1.0.0-beta.14
local TS = require(game:GetService("ReplicatedStorage"):WaitForChild("rbxts_include"):WaitForChild("RuntimeLib"))
local DamageEffect = TS.import(script, game:GetService("ServerScriptService"), "TS", "Effects", "DamageEffect").DamageEffect
local DamageSpecDecorator = TS.import(script, game:GetService("ServerScriptService"), "TS", "ItemSpecClasses", "DamageSpecDecorator").DamageSpecDecorator
local EquippableSpec = TS.import(script, game:GetService("ServerScriptService"), "TS", "ItemSpecClasses", "EquippableSpec").EquippableSpec
local holySword = DamageSpecDecorator.new(EquippableSpec.new(Instance.new("Model"), "Holy Sword", "a holy sword of the paladins", 20), DamageEffect.new(10))
local holySwordInstance = holySword:CreateItemFromSpec()
