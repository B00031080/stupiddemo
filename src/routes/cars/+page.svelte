<script>
    export let data;
</script>

<h2> Super Electric Cars</h2>
{#each data.cars as { id, name, price }, i}
    <li>{i + 1}: {name} - {price}</li>
{/each}