interface ReplicatedStorage extends Instance {
	TS: Folder & {
		module: ModuleScript;
		ClientSlotData: ModuleScript;
	};
	RemoteEvents: Folder & {
		ServerToClient: Folder & {
			OnInventoryInit: RemoteEvent;
		};
	};
	EffectFrame: Frame & {
		EffectLabel: TextLabel;
	};
	UIObjects: Folder & {
		Tooltip: Frame & {
			UIPadding: UIPadding;
			EffectsFrame: Frame & {
				UIListLayout: UIListLayout;
				ConstrainToChildren: LocalScript;
			};
			UIListLayout: UIListLayout;
			DescLabel: TextLabel;
			HeaderFrame: Frame & {
				NameText: TextLabel;
				UIPadding: UIPadding;
			};
		};
		Slot: Frame & {
			AmountText: TextLabel;
			Icon: ImageLabel;
			UIAspectRatioConstraint: UIAspectRatioConstraint;
		};
	};
	rbxts_include: Folder & {
		RuntimeLib: ModuleScript;
		Promise: ModuleScript;
		node_modules: Folder & {
			roact: Folder & {
				roact: Folder & {
					src: ModuleScript & {
						createSpy: ModuleScript;
						createElement: ModuleScript;
						oneChild: ModuleScript;
						RobloxRenderer: ModuleScript;
						createSignal: ModuleScript;
						assertDeepEqual: ModuleScript;
						getDefaultInstanceProperty: ModuleScript;
						invalidSetStateMessages: ModuleScript;
						Binding: ModuleScript;
						internalAssert: ModuleScript;
						NoopRenderer: ModuleScript;
						createReconciler: ModuleScript;
						GlobalConfig: ModuleScript;
						strict: ModuleScript;
						createReconcilerCompat: ModuleScript;
						assign: ModuleScript;
						createRef: ModuleScript;
						Type: ModuleScript;
						Portal: ModuleScript;
						Symbol: ModuleScript;
						PropMarkers: Folder & {
							Ref: ModuleScript;
							Change: ModuleScript;
							Children: ModuleScript;
							Event: ModuleScript;
						};
						createContext: ModuleScript;
						createFragment: ModuleScript;
						ElementUtils: ModuleScript;
						ComponentLifecyclePhase: ModuleScript;
						Config: ModuleScript;
						ElementKind: ModuleScript;
						PureComponent: ModuleScript;
						Logging: ModuleScript;
						Component: ModuleScript;
						SingleEventManager: ModuleScript;
						None: ModuleScript;
					};
					LICENSE: StringValue;
				};
			};
			services: ModuleScript;
			t: Folder & {
				lib: Folder & {
					ts: ModuleScript;
				};
			};
			["compiler-types"]: Folder & {
				types: Folder;
			};
			types: Folder & {
				include: Folder & {
					generated: Folder;
				};
			};
		};
	};
}
