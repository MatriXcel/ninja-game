-- Compiled with roblox-ts v1.0.0-beta.14
local TS = require(game:GetService("ReplicatedStorage"):WaitForChild("rbxts_include"):WaitForChild("RuntimeLib"))
local ItemSlot = TS.import(script, game:GetService("ServerScriptService"), "TS", "InventoryClasses", "ItemSlot").ItemSlot
local Inventory
do
	Inventory = setmetatable({}, {
		__tostring = function()
			return "Inventory"
		end,
	})
	Inventory.__index = Inventory
	function Inventory.new(...)
		local self = setmetatable({}, Inventory)
		self:constructor(...)
		return self
	end
	function Inventory:constructor(startingItems)
		self.maxSlots = 9
		self.slots = {}
		do
			local _0 = 0
			while _0 < self.maxSlots do
				local i = _0
				self.slots[i + 1] = ItemSlot.new()
				_0 = i
				_0 += 1
			end
		end
		self.OnSlotChanged = Instance.new("BindableEvent")
		self:SetStartingItems(startingItems)
	end
	function Inventory:GetSlots()
		return self.slots
	end
	function Inventory:SetStartingItems(startingItems)
		do
			local _0 = 0
			while _0 < #startingItems do
				local i = _0
				if startingItems[i + 1] ~= nil then
					self:AddItem(startingItems[i + 1])
				end
				_0 = i
				_0 += 1
			end
		end
	end
	function Inventory:GetSlotAtIndex(index)
		return self.slots[index + 1]
	end
	function Inventory:AddItem(item)
		print(item:GetItemName())
		do
			local _0 = 0
			while _0 < #self.slots do
				local i = _0
				if self.slots[i + 1]:CanAddStack(item) then
					self.slots[i + 1]:SetItem(item)
					self.slots[i + 1]:AddStack()
					return true
				end
				_0 = i
				_0 += 1
			end
		end
		do
			local _0 = 0
			while _0 < #self.slots do
				local i = _0
				if self.slots[i + 1]:GetItem() == nil then
					self.slots[i + 1]:SetItem(item)
					self.slots[i + 1]:AddStack()
					return true
				end
				_0 = i
				_0 += 1
			end
		end
		return false
	end
end
return {
	Inventory = Inventory,
}
