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
				searchTerm: this.$route.query.query,
			}
		},
		methods: {
			routerSearch() {
				if(this.searchTerm) {
					this.$router.push('/poem/search');
					this.$router.push({query: {query: this.searchTerm}});
					this.$store.commit('searchData', this.searchTerm.toLowerCase());
				} else {
					this.$router.push({name: 'poetry'});
				}
			}
		},
	}
</script>