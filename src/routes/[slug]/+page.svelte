<script lang="ts">
    const { data } = $props();
    const { meta, html } = $derived(data.blog);
</script>

<div class="container mx-auto prose mt-8 px-8 pb-32">
    <article data-slug={meta.slug} data-title={meta.title} data-date={meta.date}>
        <h1>{meta.title}</h1>
        <p class="-mt-6 text-xs text-base-content/70">{meta.date}</p>
        {@html html.body}
    </article>
    <hr />
</div>
