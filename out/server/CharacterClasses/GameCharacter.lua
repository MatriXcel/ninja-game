-- Compiled with roblox-ts v1.0.0-beta.14
local TS = require(game:GetService("ReplicatedStorage"):WaitForChild("rbxts_include"):WaitForChild("RuntimeLib"))
local Inventory = TS.import(script, game:GetService("ServerScriptService"), "TS", "InventoryClasses", "Inventory").Inventory
local ItemSpecOracle = TS.import(script, game:GetService("ReplicatedStorage"), "TS", "ItemSpecOracle").ItemSpecOracle
local GameCharacter
do
	GameCharacter = setmetatable({}, {
		__tostring = function()
			return "GameCharacter"
		end,
	})
	GameCharacter.__index = GameCharacter
	function GameCharacter.new(...)
		local self = setmetatable({}, GameCharacter)
		self:constructor(...)
		return self
	end
	function GameCharacter:constructor(model)
		self.model = model
		local itemSpecOracle = ItemSpecOracle:GetInstance()
		self.inventory = Inventory.new({ (itemSpecOracle:GetSpecByName("Warrior Sword")):CreateItemFromSpec():GetInstanceID(), (itemSpecOracle:GetSpecByName("Warrior Sword")):CreateItemFromSpec():GetInstanceID() })
	end
	function GameCharacter:GetInventory()
		return self.inventory
	end
end
return {
	GameCharacter = GameCharacter,
}
