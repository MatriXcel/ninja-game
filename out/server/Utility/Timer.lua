-- Compiled with roblox-ts v1.0.0-beta.14
local TS = require(game:GetService("ReplicatedStorage"):WaitForChild("rbxts_include"):WaitForChild("RuntimeLib"))
local RunService = TS.import(script, TS.getModule(script, "services")).RunService
local Timer
do
	Timer = setmetatable({}, {
		__tostring = function()
			return "Timer"
		end,
	})
	Timer.__index = Timer
	function Timer.new(...)
		local self = setmetatable({}, Timer)
		self:constructor(...)
		return self
	end
	function Timer:constructor(startTime)
		self.isActive = false
		self.startTime = startTime
		self.time = startTime
		self.events = {}
		self.timerEvent = RunService.RenderStepped:Connect(function(dt)
			if self.isActive then
				self.time = self.time + dt
				do
					local _0 = #self.events
					while _0 >= 0 do
						local i = _0
						if self.time >= self.events[i + 1].t then
							self.events[i + 1].f(self.time)
							local _1 = self.events
							local _2 = i
							table.remove(_1, _2 + 1)
						end
						_0 = i
						_0 -= 1
					end
				end
			end
		end)
	end
	function Timer:IsActive()
		return self.isActive
	end
	function Timer:SetActive(isActive)
		self.isActive = isActive
	end
	function Timer:FireOnTimeReached(t, f)
		local _0 = self.events
		local _1 = {
			t = t,
			f = f,
		}
		-- ▼ Array.push ▼
		_0[#_0 + 1] = _1
		-- ▲ Array.push ▲
	end
	function Timer:Destroy()
		self.timerEvent:Disconnect()
	end
end
return {
	Timer = Timer,
}
