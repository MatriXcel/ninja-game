interface StarterGui extends BasePlayerGui {
	ScreenGui: ScreenGui & {
		Tooltips: Folder;
		InventoryFrame: Frame & {
			UIAspectRatioConstraint: UIAspectRatioConstraint;
			InnerFrame: Frame & {
				Slot5: Frame & {
					AmountText: TextLabel;
					Icon: ImageLabel;
					UIAspectRatioConstraint: UIAspectRatioConstraint;
				};
				Slot7: Frame & {
					AmountText: TextLabel;
					Icon: ImageLabel;
					UIAspectRatioConstraint: UIAspectRatioConstraint;
				};
				Slot4: Frame & {
					AmountText: TextLabel;
					Icon: ImageLabel;
					UIAspectRatioConstraint: UIAspectRatioConstraint;
				};
				Slot9: Frame & {
					AmountText: TextLabel;
					UIAspectRatioConstraint: UIAspectRatioConstraint;
					Icon: ImageLabel;
				};
				Slot3: Frame & {
					AmountText: TextLabel;
					Icon: ImageLabel;
					UIAspectRatioConstraint: UIAspectRatioConstraint;
				};
				UIGridLayout: UIGridLayout;
				Slot8: Frame & {
					AmountText: TextLabel;
					UIAspectRatioConstraint: UIAspectRatioConstraint;
					Icon: ImageLabel;
				};
				Slot2: Frame & {
					AmountText: TextLabel;
					Icon: ImageLabel;
					UIAspectRatioConstraint: UIAspectRatioConstraint;
				};
				Slot1: Frame & {
					AmountText: TextLabel;
					Icon: ImageLabel;
					UIAspectRatioConstraint: UIAspectRatioConstraint;
				};
				Slot6: Frame & {
					AmountText: TextLabel;
					UIAspectRatioConstraint: UIAspectRatioConstraint;
					Icon: ImageLabel;
				};
			};
		};
	};
	TS: Folder & {
		main: LocalScript;
		hello_world: LocalScript;
		inventory_docker: LocalScript;
		inventory_slot: ModuleScript;
	};
}
