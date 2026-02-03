<script lang="ts">
    import { getAllBlogs } from './blog.remote';
    import ArticleBlog from './article-blog.svelte';
    const blogs = await getAllBlogs();
</script>

<div class="container mx-auto prose mt-8 px-8 pb-32">
    {#each blogs as blog, idx (blog.meta.slug)}
        <ArticleBlog expand={blog.meta.expand || idx < 1} {blog}>
            {#snippet after()}
                <hr class="mt-5 mb-2" />
                <hr class="mb-2" />
                <hr class="mb-20" />
            {/snippet}
        </ArticleBlog>
    {/each}

    <p class="text-right">ขอบคุณที่อ่านครับ 😊</p>
</div>
