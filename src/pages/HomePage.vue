<template>
    <h1>Home page</h1>
</template>

<script>
export default ({
    name: 'HomePage',
    async mounted() {
        const responce = await fetch('https://jsonplaceholder.typicode.com/todos');
        console.warn(responce);
    },
})
</script>
