-- Compiled with roblox-ts v1.0.0-beta.14
local TS = require(game:GetService("ReplicatedStorage"):WaitForChild("rbxts_include"):WaitForChild("RuntimeLib"))
local Roact = TS.import(script, TS.getModule(script, "roact").roact.src)
local RS = TS.import(script, TS.getModule(script, "services")).ReplicatedStorage
local function SlotComponent(props)
	local slotDisplayData = props.slotDisplayData
	print(slotDisplayData.iconID)
	local _0 = {
		Size = UDim2.new(1, 0, 1, 0),
		BorderColor3 = Color3.new(1, 1, 1),
	}
	local _1 = {
		Roact.createElement("UIAspectRatioConstraint", {
			AspectRatio = 1,
			AspectType = Enum.AspectType.ScaleWithParentSize,
		}),
	}
	local _2 = #_1
	local _3 = {
		Size = UDim2.new(1, 0, 1, 0),
		Position = UDim2.new(0, 0, 0, 0),
	}
	local _4 = RS:FindFirstChild("Icons")
	if _4 ~= nil then
		_4 = _4:FindFirstChild((slotDisplayData.iconID))
	end
	_3.Image = _4.Value
	_3.BackgroundColor3 = Color3.new(1, 1, 1)
	_1[_2 + 1] = Roact.createElement("ImageLabel", _3)
	_1[_2 + 2] = Roact.createElement("TextLabel", {
		BackgroundColor3 = Color3.new(1, 1, 1),
		AnchorPoint = Vector2.new(1, 1),
		Position = UDim2.new(1, 0, 1, 0),
		Size = UDim2.new(0.4, 0, 0.4, 0),
		Text = tostring(slotDisplayData.numStacks),
		TextXAlignment = Enum.TextXAlignment.Center,
		TextYAlignment = Enum.TextYAlignment.Center,
	})
	return Roact.createElement("Frame", _0, _1)
end
local function SlotsComponent(props)
	local slotItems = {}
	for index, slotData in pairs(props.slotDisplayDatas) do
		local _0 = slotItems
		local _1 = Roact.createElement(SlotComponent, {
			slotDisplayData = slotData,
		})
		-- ▼ Array.push ▼
		_0[#_0 + 1] = _1
		-- ▲ Array.push ▲
	end
	local _0 = {}
	local _1 = #_0
	for _2, _3 in ipairs(slotItems) do
		_0[_1 + _2] = _3
	end
	return Roact.createFragment(_0)
end
local function hello()
	return "hello"
end
local function InventoryComponent(props)
	local slotDisplayDatas = props.slotDisplayDatas
	print("from inv component")
	print(slotDisplayDatas)
	return Roact.createFragment({
		InventoryFrame = Roact.createElement("Frame", {
			AnchorPoint = Vector2.new(1, 1),
			Position = UDim2.new(0.8, 0, 0.8, 0),
			BackgroundColor3 = Color3.new(1, 1, 1),
			Size = UDim2.new(0.15, 0, 0.15, 0),
		}, {
			Roact.createElement("UIAspectRatioConstraint", {
				AspectRatio = 1,
				AspectType = Enum.AspectType.ScaleWithParentSize,
			}),
			InnerFrame = Roact.createElement("Frame", {
				BackgroundColor3 = Color3.new(1, 1, 1),
				Size = UDim2.new(1, 0, 1, 0),
				Position = UDim2.new(0, 0, 0, 0),
			}, {
				Roact.createElement("UIGridLayout", {
					CellSize = UDim2.new(0.25, 0, 0.25, 0),
					CellPadding = UDim2.new(0.05, 0, 0.05, 0),
					FillDirection = Enum.FillDirection.Horizontal,
					FillDirectionMaxCells = 3,
					HorizontalAlignment = Enum.HorizontalAlignment.Center,
					SortOrder = Enum.SortOrder.LayoutOrder,
					VerticalAlignment = Enum.VerticalAlignment.Center,
				}),
				Roact.createElement(SlotsComponent, {
					slotDisplayDatas = slotDisplayDatas,
				}),
			}),
		}),
	})
end
return {
	hello = hello,
	InventoryComponent = InventoryComponent,
}
