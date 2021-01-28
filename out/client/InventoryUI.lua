-- Compiled with roblox-ts v1.0.0-beta.14
local InventoryUI
do
	InventoryUI = setmetatable({}, {
		__tostring = function()
			return "InventoryUI"
		end,
	})
	InventoryUI.__index = InventoryUI
	function InventoryUI.new(...)
		local self = setmetatable({}, InventoryUI)
		self:constructor(...)
		return self
	end
	function InventoryUI:constructor()
	end
	function InventoryUI:DetermineDropLocation(icon)
		return nil
	end
end
return {
	InventoryUI = InventoryUI,
}
