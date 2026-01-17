<script lang="ts">
    import './layout.css';

    let { children } = $props();

    import { MetaTags } from 'svelte-meta-tags';

    const title = 'กฤษฏิ์ personal blogs';
    const description = 'จะเขียนอะไรที่อยากเขียน';
    const ogimage = 'https://thekrist.com/og-image.jpeg';
    const ogimageAlt = 'กฤษฏิ์ personal blogs';
</script>

<MetaTags
    {title}
    {description}
    keywords={['krist7599555', 'Krist Ponpairin']}
    canonical="https://thekrist.com"
    openGraph={{
        type: 'website',
        url: 'https://thekrist.com',
        title: title,
        description: description,
        images: [
            {
                url: ogimage,
                width: 1280,
                height: 917,
                alt: ogimageAlt
            }
        ]
    }}
    twitter={{
        site: '@thekristcom',
        title: title,
        description: description,
        image: ogimage,
        imageAlt: ogimageAlt
    }}
/>

<div class="flex justify-between px-8 py-4">
    <a class="text-xs" href="/">กฤษฏิ์ personal blogs</a>
    <p class="text-xs">จะเขียนอะไรที่อยากเขียน</p>
</div>

{@render children()}
