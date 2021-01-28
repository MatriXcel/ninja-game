-- Compiled with roblox-ts v1.0.0-beta.14
local TS = require(game:GetService("ReplicatedStorage"):WaitForChild("rbxts_include"):WaitForChild("RuntimeLib"))
local Roact = TS.import(script, TS.getModule(script, "roact").roact.src)
local function SlotComponent(props)
	local slotDisplayData = props.slotDisplayData
	return Roact.createElement("Frame", {
		Size = UDim2.new(1, 0, 1, 0),
	}, {
		Roact.createElement("UIAspectRatioConstraint", {
			AspectRatio = 1,
			AspectType = Enum.AspectType.ScaleWithParentSize,
		}),
		Roact.createElement("ImageLabel", {
			Size = UDim2.new(1, 0, 1, 0),
			Position = UDim2.new(0, 0, 0, 0),
			Image = slotDisplayData.iconID,
		}),
		Roact.createElement("TextLabel", {
			Position = UDim2.new(1, 0, 1, 0),
			Size = UDim2.new(0.4, 0, 0.4, 0),
			Text = tostring(slotDisplayData.numStacks),
		}),
	})
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
local function InventoryComponent(props)
	local slotDisplayDatas = props.slotDisplayDatas
	return Roact.createFragment({
		InventoryFrame = Roact.createElement("Frame", {
			AnchorPoint = Vector2.new(1, 1),
			Position = UDim2.new(0.8, 0, 0.8, 0),
			Size = UDim2.new(0.15, 0, 0.15, 0),
		}, {
			Roact.createElement("UIAspectRatioConstraint"),
			InnerFrame = Roact.createElement("Frame", {
				Position = UDim2.new(0, 0, 0, 0),
			}, {
				Roact.createElement("UIGridLayout"),
				Roact.createElement(SlotsComponent, {
					slotDisplayDatas = slotDisplayDatas,
				}),
			}),
		}),
	})
end
return {
	InventoryComponent = InventoryComponent,
}
