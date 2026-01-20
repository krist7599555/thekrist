import { mdsvex } from "mdsvex";
import adapter from "@sveltejs/adapter-cloudflare";
import { vitePreprocess } from "@sveltejs/vite-plugin-svelte";

/** @type {import('@sveltejs/kit').Config} */
const config = {
    // Consult https://svelte.dev/docs/kit/integrations
    // for more information about preprocessors
    preprocess: [mdsvex(), vitePreprocess()],

    kit: {
        // prerender: {
        //     crawl: true,
        //     entries: ["*"],
        // },
        adapter: adapter({
            // strict: false,
        }),
        experimental: { remoteFunctions: true },
    },
    compilerOptions: {
        experimental: { async: true },
    },
    extensions: [".svelte", ".svx", ".md"],
};

export default config;
