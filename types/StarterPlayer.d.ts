interface StarterPlayer extends Instance {
	StarterCharacterScripts: StarterCharacterScripts;
	StarterPlayerScripts: StarterPlayerScripts & {
		TS: Folder & {
			main: LocalScript;
		};
	};
}
