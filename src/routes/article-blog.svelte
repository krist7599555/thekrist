<script lang="ts">
    import type { Blog } from './blog.remote';
    let { blog }: { blog: Blog } = $props();
    let meta = $derived(blog.meta);
</script>

<article data-slug={meta.slug} data-title={meta.title} data-date={meta.date}>
    <a href="/{meta.slug}" class="no-underline hover:underline">
        <h1>{meta.title}</h1>
    </a>
    <p class="-mt-6 text-xs leading-5 text-base-content/70">
        {#each meta.tags.split(',') as tag}
            <span class="mr-0.5 badge badge-soft badge-xs">{tag}</span>
        {/each}
        <br />
        {meta.date}
    </p>
    {@html blog.html.body}
</article>
