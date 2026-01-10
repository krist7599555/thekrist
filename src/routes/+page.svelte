<script lang="ts">
    import Main1 from './1.svx';
    import Main2 from './2.svx';
</script>

<div class="flex justify-between px-8 py-4">
    <p class="text-xs">กฤษฏิ์ personal blogs</p>
    <p class="text-xs">จะเขียนอะไรที่อยากเขียน</p>
</div>

<div class="container mx-auto prose mt-8 px-8 pb-32">
    {#each [Main2, Main1] as Component}
        <article>
            <Component />
        </article>
        <hr />
    {/each}

    <p class="text-right">ขอบคุณที่อ่านครับ 😊</p>
</div>
