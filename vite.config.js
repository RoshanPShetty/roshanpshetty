import { sveltekit } from "@sveltejs/kit/vite";
import Unocss from "unocss/vite";
import path from "path";

/** @type {import('vite').UserConfig} */
const config = {
	plugins: [
		sveltekit(),
		Unocss({
			/* options */
		}),
	],
	resolve: {
		alias: {
			$components: path.resolve("./src/lib/components"),
			$services: path.resolve("./src/lib/services"),
			$stores: path.resolve("./src/lib/stores"),
			$models: path.resolve("./src/lib/models"),
			$assets: path.resolve("./src/lib/assets"),
			$config: path.resolve("./src/lib/config"),
		},
	},
};

export default config;
