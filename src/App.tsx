import { Component, createSignal } from "solid-js";
import { HopeProvider, HopeThemeConfig } from "@hope-ui/solid";

import { Main } from "./components/Main";

const App: Component = () => {
	const config: HopeThemeConfig = {
		initialColorMode: "dark",
	}

	return (
		<HopeProvider config={config}>
			<Main />
		</HopeProvider>
	);
};

export default App;
