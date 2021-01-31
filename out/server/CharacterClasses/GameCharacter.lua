-- Compiled with roblox-ts v1.0.0-beta.14
local TS = require(game:GetService("ReplicatedStorage"):WaitForChild("rbxts_include"):WaitForChild("RuntimeLib"))
local Inventory = TS.import(script, game:GetService("ServerScriptService"), "TS", "InventoryClasses", "Inventory").Inventory
local ItemSpecOracle = TS.import(script, game:GetService("ServerScriptService"), "TS", "ItemSpecOracle").ItemSpecOracle
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
		print(itemSpecOracle:GetSpecByName("Warrior Sword"))
		local _0 = itemSpecOracle:GetSpecByName("Warrior Sword")
		if _0 ~= nil then
			_0 = _0:CreateItemFromSpec()
		end
		local _1 = itemSpecOracle:GetSpecByName("Warrior Sword")
		if _1 ~= nil then
			_1 = _1:CreateItemFromSpec()
		end
		self.inventory = Inventory.new({ _0, _1 })
		-- this.inventory.AddItem(itemSpecOracle.GetSpecByName("Warrior Sword")?.CreateItemFromSpec() as IItem);
	end
	function GameCharacter:GetInventory()
		return self.inventory
	end
end
return {
	GameCharacter = GameCharacter,
}
