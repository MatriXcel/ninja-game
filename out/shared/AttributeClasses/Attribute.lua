-- Compiled with roblox-ts v1.0.0-beta.14
local TS = require(game:GetService("ReplicatedStorage"):WaitForChild("rbxts_include"):WaitForChild("RuntimeLib"))
local BaseAttribute = TS.import(script, game:GetService("ReplicatedStorage"), "TS", "AttributeClasses", "BaseAttribute").BaseAttribute
local Attribute
do
	local super = BaseAttribute
	Attribute = setmetatable({}, {
		__tostring = function()
			return "Attribute"
		end,
		__index = super,
	})
	Attribute.__index = Attribute
	function Attribute.new(...)
		local self = setmetatable({}, Attribute)
		self:constructor(...)
		return self
	end
	function Attribute:constructor(startingValue)
		super.constructor(self, startingValue, 0)
		self.finalBonuses = {}
		self.rawBonuses = self.finalBonuses
		self.finalValue = startingValue
	end
	function Attribute:AddRawBonus(rawBonus)
		local _0 = self.rawBonuses
		local _1 = rawBonus
		-- ▼ Array.push ▼
		_0[#_0 + 1] = _1
		-- ▲ Array.push ▲
	end
	function Attribute:AddFinalBonus(finalBonus)
		local _0 = self.finalBonuses
		local _1 = finalBonus
		-- ▼ Array.push ▼
		_0[#_0 + 1] = _1
		-- ▲ Array.push ▲
	end
	function Attribute:RemoveRawBonus(_rawBonus)
		local _0 = self.rawBonuses
		local _1 = function(rawBonus, index)
			if rawBonus == _rawBonus then
				local _2 = self.rawBonuses
				local _3 = index
				table.remove(_2, _3 + 1)
			end
		end
		-- ▼ ReadonlyArray.forEach ▼
		for _2, _3 in ipairs(_0) do
			_1(_3, _2 - 1, _0)
		end
		-- ▲ ReadonlyArray.forEach ▲
	end
	function Attribute:RemoveFinalBonus(_finalBonus)
		local _0 = self.finalBonuses
		local _1 = function(finalBonus, index)
			if finalBonus == _finalBonus then
				local _2 = self.finalBonuses
				local _3 = index
				table.remove(_2, _3 + 1)
			end
		end
		-- ▼ ReadonlyArray.forEach ▼
		for _2, _3 in ipairs(_0) do
			_1(_3, _2 - 1, _0)
		end
		-- ▲ ReadonlyArray.forEach ▲
	end
	function Attribute:ApplyRawBonuses()
		local rawBonusValue = 0
		local rawBonusMultiplier = 0
		local _0 = self.rawBonuses
		local _1 = function(rawBonus)
			rawBonusValue += rawBonus:GetValue()
			rawBonusMultiplier += rawBonus:GetMultiplier()
		end
		-- ▼ ReadonlyArray.forEach ▼
		for _2, _3 in ipairs(_0) do
			_1(_3, _2 - 1, _0)
		end
		-- ▲ ReadonlyArray.forEach ▲
		self.finalValue += rawBonusValue
		self.finalValue *= (1 + rawBonusMultiplier)
	end
	function Attribute:ApplyFinalBonuses()
		local finalBonusValue = 0
		local finalBonusMultiplier = 0
		local _0 = self.finalBonuses
		local _1 = function(finalBonus)
			finalBonusValue += finalBonus:GetValue()
			finalBonusMultiplier += finalBonus:GetMultiplier()
		end
		-- ▼ ReadonlyArray.forEach ▼
		for _2, _3 in ipairs(_0) do
			_1(_3, _2 - 1, _0)
		end
		-- ▲ ReadonlyArray.forEach ▲
		self.finalValue += finalBonusValue
		self.finalValue *= (1 + finalBonusMultiplier)
	end
	function Attribute:CalculateValue()
		self.finalValue = self.baseValue
		self:ApplyRawBonuses()
		self:ApplyFinalBonuses()
		return self.finalValue
	end
	function Attribute:GetFinalValue()
		return self.finalValue
	end
end
return {
	Attribute = Attribute,
}
