-- Compiled with roblox-ts v1.0.0-beta.14
local TS = require(game:GetService("ReplicatedStorage"):WaitForChild("rbxts_include"):WaitForChild("RuntimeLib"))
-- local class = require(game:GetService("ReplicatedStorage").Class)
-- local BaseAttribute = require(script.Parent.BaseAttribute)
local BaseAttribute = TS.import(script, game:GetService("ReplicatedStorage"), "TS", "AttributeClasses", "BaseAttribute").BaseAttribute
local RawBonus
do
	local super = BaseAttribute
	RawBonus = setmetatable({}, {
		__tostring = function()
			return "RawBonus"
		end,
		__index = super,
	})
	RawBonus.__index = RawBonus
	function RawBonus.new(...)
		local self = setmetatable({}, RawBonus)
		self:constructor(...)
		return self
	end
	function RawBonus:constructor(value, multiplier)
		super.constructor(self, value, multiplier)
	end
end
return {
	RawBonus = RawBonus,
}
