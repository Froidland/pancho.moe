import { Button } from "@hope-ui/solid";
import { Component, createEffect, createSignal } from "solid-js";

export const Main: Component = () => {
	const [counter, setCounter] = createSignal(0);

	createEffect(() => {
		console.log("Counter changed to", counter());
	});

	return (
		<div class="flex h-screen items-center justify-center">
			<p>There's nothing here :)</p>
		</div>
	);
};
