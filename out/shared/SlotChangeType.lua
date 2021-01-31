-- Compiled with roblox-ts v1.0.0-beta.14
local SlotChangeType
do
	local _0 = {}
	SlotChangeType = setmetatable({}, {
		__index = _0,
	})
	SlotChangeType.ITEM_ADDED = 0
	_0[0] = "ITEM_ADDED"
	SlotChangeType.ITEM_ADDED_ON_EMPTY = 1
	_0[1] = "ITEM_ADDED_ON_EMPTY"
end
return {
	SlotChangeType = SlotChangeType,
}
