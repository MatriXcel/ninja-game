-- Compiled with roblox-ts v1.0.0-beta.14
local ClientSlotInfoExtractor
do
	ClientSlotInfoExtractor = setmetatable({}, {
		__tostring = function()
			return "ClientSlotInfoExtractor"
		end,
	})
	ClientSlotInfoExtractor.__index = ClientSlotInfoExtractor
	function ClientSlotInfoExtractor.new(...)
		local self = setmetatable({}, ClientSlotInfoExtractor)
		self:constructor(...)
		return self
	end
	function ClientSlotInfoExtractor:constructor(slot)
		self.slot = slot
		self.slotClientData = {
			itemName = "",
			iconID = "",
			itemDesc = "",
			numStacks = slot:GetNumStacks(),
		}
		local _0 = self.slot:GetItem()
		if _0 ~= nil then
			_0:Accept(self)
		end
	end
	function ClientSlotInfoExtractor:GetSlotClientData()
		return self.slotClientData
	end
	function ClientSlotInfoExtractor:visitItem(item)
		print("entered here")
		self.slotClientData.itemName = item:GetItemName()
		self.slotClientData.itemDesc = item:GetItemDescription()
		self.slotClientData.iconID = item:GetIconID()
		print(self.slotClientData.itemDesc)
	end
	function ClientSlotInfoExtractor:visitEquippable(item)
		self:visitModelVisualizable(item)
	end
	function ClientSlotInfoExtractor:visitModelVisualizable(item)
		self:visitItem(item)
	end
	function ClientSlotInfoExtractor:visitHasEffectItem(item)
		self:visitEquippable(item)
		if self.slotClientData.effects == nil then
			self.slotClientData.effects = {}
		end
		local _0 = (self.slotClientData.effects)
		local _1 = item:GetEffectDescription()
		-- ▼ Array.push ▼
		_0[#_0 + 1] = _1
		-- ▲ Array.push ▲
	end
end
return {
	ClientSlotInfoExtractor = ClientSlotInfoExtractor,
}
