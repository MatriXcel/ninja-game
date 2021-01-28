-- Compiled with roblox-ts v1.0.0-beta.14
local TS = require(game:GetService("ReplicatedStorage"):WaitForChild("rbxts_include"):WaitForChild("RuntimeLib"))
local RS = TS.import(script, TS.getModule(script, "services")).ReplicatedStorage
local TooltipUI
do
	TooltipUI = setmetatable({}, {
		__tostring = function()
			return "TooltipUI"
		end,
	})
	TooltipUI.__index = TooltipUI
	function TooltipUI.new(...)
		local self = setmetatable({}, TooltipUI)
		self:constructor(...)
		return self
	end
	function TooltipUI:constructor(tooltipInstance, pos, itemName, desc, effects)
		self.tooltipInstance = tooltipInstance
		self.tooltipInstance.Visible = true
		self.tooltipInstance.Position = pos
		self.tooltipInstance.HeaderFrame.NameText.Text = itemName
		if effects ~= nil then
			for index, effect in pairs(effects) do
				local effectFrameClone = RS.EffectFrame:Clone()
				effectFrameClone.EffectLabel.Text = effect
			end
		end
		self.tooltipInstance.DescLabel.Text = desc
	end
	function TooltipUI:Show()
		self.tooltipInstance.Visible = true
	end
	function TooltipUI:Hide()
		self.tooltipInstance.Visible = false
	end
end
return {
	TooltipUI = TooltipUI,
}
