<script lang="ts">
    import { getAllBlogs } from './blog.remote';
    import ArticleBlog from './article-blog.svelte';
    const blogs = await getAllBlogs();
</script>

<div class="container mx-auto prose mt-8 px-8 pb-32">
    {#each blogs as blog (blog.meta.slug)}
        <ArticleBlog {blog} />
        <hr />
    {/each}

    <p class="text-right">ขอบคุณที่อ่านครับ 😊</p>
</div>
