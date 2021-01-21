-- Compiled with roblox-ts v1.0.0-beta.14
local TS = require(game:GetService("ReplicatedStorage"):WaitForChild("rbxts_include"):WaitForChild("RuntimeLib"))
local Timer = TS.import(script, game:GetService("ServerScriptService"), "TS", "Utility", "Timer").Timer
local BaseAttribute = TS.import(script, game:GetService("ServerScriptService"), "TS", "AttributeClasses", "BaseAttribute").BaseAttribute
local FinalBonus
do
	local super = BaseAttribute
	FinalBonus = setmetatable({}, {
		__tostring = function()
			return "FinalBonus"
		end,
		__index = super,
	})
	FinalBonus.__index = FinalBonus
	function FinalBonus.new(...)
		local self = setmetatable({}, FinalBonus)
		self:constructor(...)
		return self
	end
	function FinalBonus:constructor(value, multiplier, timeLength)
		super.constructor(self, value, multiplier)
		self.timer = Timer.new(0)
		self.timer:FireOnTimeReached(timeLength, function(t)
			return self:onTimerEnd(t)
		end)
	end
	function FinalBonus:startTimer(parent)
		self.parent = parent
		self.timer:SetActive(true)
	end
	function FinalBonus:onTimerEnd(t)
		self.timer:Destroy()
		local _0 = self.parent
		if _0 ~= nil then
			_0:RemoveFinalBonus(self)
		end
	end
end
return {
	FinalBonus = FinalBonus,
}
