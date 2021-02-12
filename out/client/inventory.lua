-- Compiled with roblox-ts v1.0.0-beta.14
local TS = require(game:GetService("ReplicatedStorage"):WaitForChild("rbxts_include"):WaitForChild("RuntimeLib"))
local _0 = TS.import(script, TS.getModule(script, "roact").roact.src)
local Roact = _0
local Component = _0.Component
local RS = TS.import(script, TS.getModule(script, "services")).ReplicatedStorage
local ItemSpecOracle = TS.import(script, game:GetService("ReplicatedStorage"), "TS", "ItemSpecOracle").ItemSpecOracle
local SlotUI
do
	SlotUI = Component:extend("SlotUI")
	function SlotUI:init()
	end
	function SlotUI:init()
		if self.props.itemID ~= nil then
			print("the sent ID is " .. tostring(self.props.itemID))
			self.itemSpec = ItemSpecOracle:GetInstance():GetSpecByID(self.props.itemID)
			print(self.itemSpec)
		end
	end
	function SlotUI:render()
		local _1 = {
			Size = UDim2.new(1, 0, 1, 0),
			BorderColor3 = Color3.new(1, 1, 1),
		}
		local _2 = {
			Roact.createElement("UIAspectRatioConstraint", {
				AspectRatio = 1,
				AspectType = Enum.AspectType.ScaleWithParentSize,
			}),
		}
		local _3 = #_2
		local _4 = {
			Size = UDim2.new(1, 0, 1, 0),
			Position = UDim2.new(0, 0, 0, 0),
		}
		local _5 = RS:FindFirstChild("Icons")
		if _5 ~= nil then
			_5 = _5:FindFirstChild((self.itemSpec) and self.itemSpec:GetIconID() or "DefaultIcon")
		end
		_4.Image = _5.Value
		_4.BackgroundColor3 = Color3.new(1, 1, 1)
		_2[_3 + 1] = Roact.createElement("ImageLabel", _4)
		_2[_3 + 2] = Roact.createElement("TextLabel", {
			BackgroundColor3 = Color3.new(1, 1, 1),
			AnchorPoint = Vector2.new(1, 1),
			Position = UDim2.new(1, 0, 1, 0),
			Size = UDim2.new(0.4, 0, 0.4, 0),
			Text = tostring(self.props.numStacks),
			TextXAlignment = Enum.TextXAlignment.Center,
			TextYAlignment = Enum.TextYAlignment.Center,
		})
		return Roact.createElement("Frame", _1, _2)
	end
end
local InventoryUI
do
	InventoryUI = Component:extend("InventoryUI")
	function InventoryUI:init()
	end
	function InventoryUI:renderSlots()
		local slotItems = {}
		for index, slotData in pairs(self.props.slotDisplayDatas) do
			local _1 = slotItems
			local _2 = {}
			for _3, _4 in pairs(slotData) do
				_2[_3] = _4
			end
			local _3 = Roact.createElement(SlotUI, _2)
			-- ▼ Array.push ▼
			_1[#_1 + 1] = _3
			-- ▲ Array.push ▲
		end
		return slotItems
	end
	function InventoryUI:render()
		local _1 = {
			AnchorPoint = Vector2.new(1, 1),
			Position = UDim2.new(0.8, 0, 0.8, 0),
			BackgroundColor3 = Color3.new(1, 1, 1),
			Size = UDim2.new(0.15, 0, 0.15, 0),
		}
		local _2 = {
			Roact.createElement("UIAspectRatioConstraint", {
				AspectRatio = 1,
				AspectType = Enum.AspectType.ScaleWithParentSize,
			}),
		}
		local _3 = #_2
		local _4 = {
			BackgroundColor3 = Color3.new(1, 1, 1),
			Size = UDim2.new(1, 0, 1, 0),
			Position = UDim2.new(0, 0, 0, 0),
		}
		local _5 = {
			Roact.createElement("UIGridLayout", {
				CellSize = UDim2.new(0.25, 0, 0.25, 0),
				CellPadding = UDim2.new(0.05, 0, 0.05, 0),
				FillDirection = Enum.FillDirection.Horizontal,
				FillDirectionMaxCells = 3,
				HorizontalAlignment = Enum.HorizontalAlignment.Center,
				SortOrder = Enum.SortOrder.LayoutOrder,
				VerticalAlignment = Enum.VerticalAlignment.Center,
			}),
		}
		local _6 = #_5
		local _7 = {}
		local _8 = #_7
		for _9, _10 in ipairs(self:renderSlots()) do
			_7[_8 + _9] = _10
		end
		_5[_6 + 1] = Roact.createFragment(_7)
		_2.InnerFrame = Roact.createElement("Frame", _4, _5)
		return Roact.createFragment({
			InventoryFrame = Roact.createElement("Frame", _1, _2),
		})
	end
end
return {
	SlotUI = SlotUI,
	InventoryUI = InventoryUI,
}
