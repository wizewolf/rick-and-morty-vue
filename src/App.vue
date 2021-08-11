<template>
    <div class="container">
        <h1>Rick and Morty</h1>
        <FilterByStatus/>
        <FilterByName/>
        <ListCharacters/>
    </div>
</template>

<script>
    import FilterByStatus from "@/components/FilterByStatus";
    import FilterByName from "@/components/FilterByName";
    import ListCharacters from "@/components/ListCharacters";

    export default {
        name: 'App',
        components: {
            FilterByStatus,
            FilterByName,
            ListCharacters
        }
    }
</script>

<style lang="scss">
    :root {
        --background-body: #24282F;
        --background-card: #3C3E44;
        --text-white: #ffffff;
        --text-gray: #c0c0c0;
        --text-orange: #ff9800;
    }

    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    body {
        background-color: var(--background-body);
        color: var(--text-white);
        font-family: 'Segoe UI', Tahma, Geneva, Verdana, sans-serif;
    }

    h1 {
        margin-bottom: 3rem;
        text-align: center;
    }

    .container {
        width: 980px;
        max-width: 90%;
        margin: 5rem auto;
    }

    img {
        width: 100%;
    }
</style>
