<template>
	<div class="collapse navbar-collapse" id="navbarSupportedContent">
	        <input 
	        		class="form-control mr-sm-2" 
	        		type="search" 
	        		placeholder="Search" 
	        		aria-label="Search"
	        		v-model="searchTerm"
	        		@input="routerSearch()">
	</div>
</template>

<script>
	import { mapGetters } from 'vuex';

	export default {
		data() {
			return {
				searchTerm: '',
			}
		},
		computed: {
			...mapGetters([
					'fetchData',
					'fetchImages',
				]),
		},
		methods: {
			routerSearch() {
				if(this.searchTerm) {
					this.$router.push('/poem/search');
					this.$router.push({query: {query: this.searchTerm}});
					this.$store.commit('filterData', this.$route.query.query);
				} else {
					this.$router.push({name: 'poetry'});
				}
			}
		},
		created() {
			this.$store.commit('changeBgStatus', true);
			this.$store.dispatch('fetchPoemData');
			this.$store.dispatch('fetchPoemImages');
		}
	}
</script>