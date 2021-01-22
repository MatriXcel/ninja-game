interface ServerScriptService extends Instance {
	ItemClasses: Folder & {
		DataClasses: Folder & {
			UsableItemInstance: ModuleScript;
			ItemInstance: ModuleScript;
		};
		Item: ModuleScript;
		ItemEffects: Folder & {
			HealItemEffect: ModuleScript;
			DamageItemEffect: ModuleScript;
			UsableItemEffect: ModuleScript;
		};
		UsableDecorator: ModuleScript;
		RecordClasses: Folder & {
			ItemRecord: ModuleScript;
			UsableItemRecord: ModuleScript;
		};
	};
	TS: Folder & {
		ItemClasses: Folder & {
			HasHeal: ModuleScript;
			ModelVisualizable: ModuleScript;
			Equippable: ModuleScript;
			Item: ModuleScript;
		};
		ItemSpecClasses: Folder & {
			ModelVisualizableSpecDecorator: ModuleScript;
			ConsumableSpec: ModuleScript;
			HealSpecDecorator: ModuleScript;
			EquippableSpec: ModuleScript;
			ItemSpec: ModuleScript;
		};
		AttributeClasses: Folder & {
			RawBonus: ModuleScript;
			FinalBonus: ModuleScript;
			Attribute: ModuleScript;
			BaseAttribute: ModuleScript;
		};
		test: Script;
		Utility: Folder & {
			Timer: ModuleScript;
		};
		main: Script;
		Effects: Folder & {
			HealEffect: ModuleScript;
			IEffect: ModuleScript;
		};
	};
	AttributeClasses: Folder & {
		FinalBonus: ModuleScript;
		RawBonus: ModuleScript;
		Attribute: ModuleScript;
		BaseAttribute: ModuleScript;
	};
	Character: Folder & {
		Inventory: ModuleScript;
		ItemSlot: ModuleScript;
		Character: ModuleScript;
	};
}
