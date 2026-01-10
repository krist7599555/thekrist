// See https://svelte.dev/docs/kit/types#app.d.ts
// for information about these interfaces
declare global {
    namespace App {
        interface Platform {
            env: Env;
            ctx: ExecutionContext;
            caches: CacheStorage;
            cf?: IncomingRequestCfProperties;
        }

        // interface Error {}
        // interface Locals {}
        // interface PageData {}
        // interface PageState {}
        // interface Platform {}
    }
    declare module "*.svx" {
        const component: ConstructorOfATypedSvelteComponent;
        export default component;
    }
    // declare module '*.svelte' {
    //     const component: ConstructorOfATypedSvelteComponent;
    //     export default component;
    // }
}

export {};
