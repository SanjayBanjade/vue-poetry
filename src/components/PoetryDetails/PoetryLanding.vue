<template>
	<div class="container text-center text-light" style="padding-top: 7em;">
	    <div class="row">
	        <div class="col-sm-12">
	            <h1 class="display-4">Poetry makes you feel fresh!</h1>
	            <blockquote class="blockquote">
	              <p class="mb-0">The poet is a liar who always speaks the truth!</p>
	              <footer class="blockquote-footer"><cite class="text-light" title="Source Title">Someone Famous</cite></footer>
	              <router-link to="/poetry/1" tag="a" class="btn btn-primary btn-lg">Discover More</router-link>
	            </blockquote>
	        </div>
	    </div>
	</div>
</template>

<style scoped>
	.blockquote-footer {
		padding-bottom: 1em;
	}
	.display-4 {
		font-family: 'Pacifico', sans-serif;
		padding-bottom: 0.1em;
	}
</style>

<script>
	export default {
		created() {
			this.$store.commit('changeBgStatus', false);
		}
	}
</script>	