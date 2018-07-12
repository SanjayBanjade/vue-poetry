<template>
    <div id="app">
        <div class="poet-wrapper" :style="'background:url('+require('../assets/nature.jpg')+')'" :class="{'remBG': bgStat}">
            <div class="dark-overlay" :class="{'remBG': bgStat}"></div>
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
                <router-link to="/"><a class="navbar-brand">Poet Box</a></router-link>
                <poetry-search></poetry-search>
            </nav>
            <keep-alive>
                <router-view></router-view>
            </keep-alive>
        </div>
        <poetry-searchresults></poetry-searchresults>
    </div>
</template>

<style>
    body {
        font-family: 'Roboto', 'Helvetica', sans-serif;
    }
    .navbar-brand {
        font-family: 'Pacifico', sans-serif;
        font-size: 24px;
    }
    .poet-wrapper {
        height: 100vh; 
        background-size: cover!important;
        background-repeat: no-repeat!important;
    }
    .dark-overlay {
        height: 100%;
        background-color: rgba(0, 0, 0, 0.5);
        position: absolute!important;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        margin: auto;
    }
    .remBG {
        background: none!important;
    }
</style>   

<script>
    import PoetrySearch from '@/components/PoetryDetails/Search.vue'
    import PoetrySearchResults from '@/components/PoetryDetails/SearchResults.vue'

    export default {
        name: 'App',
        components: {
            poetrySearch: PoetrySearch,
            poetrySearchresults: PoetrySearchResults
        },
        computed: {
            bgStat() {
                return this.$store.state.main.bgStat;
            }
        },
        watch: {
            '$route' (to, from) {
                if(to.fullPath === '/') {
                    this.$store.commit('changeBgStatus', false);
                } else {
                    this.$store.commit('changeBgStatus', true);
                }
            }
        }
    }
</script>