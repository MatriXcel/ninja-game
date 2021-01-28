type Tooltip = Frame & {
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
}
