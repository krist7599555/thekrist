<script lang="ts">
    import ArticleBlog from '../article-blog.svelte';

    const { data } = $props();
    const blog = $derived(data.blog);
</script>

<div class="container mx-auto prose mt-8 px-8 pb-32">
    <ArticleBlog {blog} />
    <hr />
    <a href="/" data-sveltekit-reload>กลับหน้าแรก</a>
</div>
