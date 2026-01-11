<script lang="ts">
    import { getAllBlogs } from './blog.remote';

    const blogs = await getAllBlogs();
</script>

<div class="container mx-auto prose mt-8 px-8 pb-32">
    {#each blogs as { meta, html } (meta.slug)}
        <article data-slug={meta.slug} data-title={meta.title} data-date={meta.date}>
            <a href="/{meta.slug}" class="no-underline hover:underline">
                <h1>{meta.title}</h1>
            </a>
            <p class="-mt-6 text-xs text-base-content/70">{meta.date}</p>
            {@html html.body}
        </article>
        <hr />
    {/each}

    <p class="text-right">ขอบคุณที่อ่านครับ 😊</p>
</div>
