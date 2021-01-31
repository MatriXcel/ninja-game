interface ReplicatedStorage extends Instance {
	TS: Folder & {
		module: ModuleScript;
		ClientSlotData: ModuleScript;
	};
	RemoteEvents: Folder & {
		ServerToClient: Folder & {
			OnSlotChanged: RemoteEvent;
			OnInventoryInit: RemoteEvent;
		};
	};
	Icons: Folder & {
		DefaultIcon: StringValue;
		PotionIcon: StringValue;
		SwordIcon: StringValue;
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
			["roact-rodux"]: Folder & {
				out: ModuleScript & {
					join: ModuleScript;
					StoreProvider: ModuleScript;
					Symbol: ModuleScript;
					shallowEqual: ModuleScript;
					getStore: ModuleScript;
					storeKey: ModuleScript;
					connect: ModuleScript;
				};
			};
			services: ModuleScript;
			rodux: Folder & {
				rodux: Folder & {
					lib: ModuleScript & {
						thunkMiddleware: ModuleScript;
						loggerMiddleware: ModuleScript;
						combineReducers: ModuleScript;
						NoYield: ModuleScript;
						createReducer: ModuleScript;
						Store: ModuleScript;
						Signal: ModuleScript;
					};
				};
			};
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
