-- Compiled with roblox-ts v1.0.0-beta.14
local TS = require(game:GetService("ReplicatedStorage"):WaitForChild("rbxts_include"):WaitForChild("RuntimeLib"))
local ItemSpec = TS.import(script, game:GetService("ServerScriptService"), "TS", "ItemSpecClasses", "ItemSpec").ItemSpec
local ConsumableSpec
do
	local super = ItemSpec
	ConsumableSpec = setmetatable({}, {
		__tostring = function()
			return "ConsumableSpec"
		end,
		__index = super,
	})
	ConsumableSpec.__index = ConsumableSpec
	function ConsumableSpec.new(...)
		local self = setmetatable({}, ConsumableSpec)
		self:constructor(...)
		return self
	end
	function ConsumableSpec:constructor(itemName, itemDesc, maximumStacks, effects, iconID)
		super.constructor(self, itemName, itemDesc, maximumStacks, iconID)
		self.effects = effects
	end
	function ConsumableSpec:Use()
	end
end
return {
	ConsumableSpec = ConsumableSpec,
}
