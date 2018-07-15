<template>
    <div id="app">
        <keep-alive>
            <router-view></router-view>
        </keep-alive>
    </div>
</template>

<style>
    body {
        font-family: 'Roboto', 'Helvetica', sans-serif;
    }
</style>

<script>
    export default {
        mounted() {
            this.$store.dispatch('fetchPoemData');
            this.$store.dispatch('fetchPoemImages');
        }
    }
</script>