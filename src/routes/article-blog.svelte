<script lang="ts">
    import { formatThaiDateToRelative } from '$lib/date';
    import type { Snippet } from 'svelte';
    import type { Blog } from './blog.remote';
    let {
        blog,
        expand = true,
        after
    }: { blog: Blog; expand?: boolean; after?: Snippet } = $props();
    let meta = $derived(blog.meta);

    let dayago = $derived(formatThaiDateToRelative(meta.date));
</script>

<article
    class:mini={expand === false}
    data-slug={meta.slug}
    data-title={meta.title}
    data-date={meta.date}
>
    <a href="/{meta.slug}" class="no-underline hover:underline">
        <h1>{meta.title}</h1>
    </a>

    {#if expand === false}
        <button
            onclick={() => (expand = true)}
            class="btn absolute bottom-12 left-1/2 z-10 -translate-x-1/2 btn-outline"
        >
            แสดงเพิ่ม
        </button>
    {/if}

    <p class="-mt-6 text-xs leading-5 text-base-content/70">
        {#each meta.tags.split(',') as tag}
            <span class="mr-0.5 badge badge-soft badge-xs">{tag}</span>
        {/each}
        <br />
        {meta.date} ({dayago})
    </p>
    {@html blog.html.body}

    <div
        class="mt-20 flex items-center justify-center gap-2 text-left text-xs leading-5 text-base-content/70"
    >
        <img src="/favicon.png" alt="" class="size-15" />
        <p>
            {meta.title}<br />
            {meta.date}
            <br />
            {#each meta.tags.split(',') as tag}
                <span class="mr-0.5 badge badge-soft badge-xs">{tag}</span>
            {/each}
        </p>
    </div>
    {@render after?.()}
</article>

<style scoped>
    article.mini {
        position: relative;
        height: 1700px;
        overflow: hidden;
        &:after {
            content: '';
            position: absolute;
            bottom: 0;
            left: 0;
            width: 100%;
            height: 400px;
            background: linear-gradient(
                to top,
                var(--color-base-100) 20%,
                rgba(255, 255, 255, 0) 100%
            );
        }
    }
</style>
