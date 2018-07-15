<template>
	<div class="wrapper">
		<div class="lds-dual-ring" v-show="fetchLoader"></div>
		<div class="container pt-5">
			<div class="row">
				<div 
					class="col-sm-4" 
					v-if="returnSearchResults.length > 0" 
					v-for="(poetry, index) in returnSearchResults">
					<div class="card">
					    <img 
					    	class="card-img-top"
					    	v-if="fetchImages.length > 0"
					    	:src="fetchImages[poetry.title.match(/\d+/)[0]].largeImageURL.toLowerCase()" 
					    	alt="Card image cap">
					    <div class="card-body">
					        <h5 class="card-title">{{ poetry.title }}</h5>
					        <span class="card-text" v-for="(poetryBody, i) in poetry.lines.slice(0, 5)">
					        	{{ i === 4 ? poetryBody.split(',').join('') + '...' : poetryBody  }}
					        </span>
					        <br>
					        <a href="#" class="btn btn-primary">Read More</a>
					    </div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<style scoped>
	.card {
		box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
		transition: box-shadow 0.3s cubic-bezier(.25,.8,.25,1);
		border: 0;
	}
	.card:hover {
		box-shadow: 0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22);
	}
	.col-sm-4 {
		padding-top: 0.5em;
		padding-bottom: 0.5em;
	}
	img, .card {
		border-radius: 0;
	}
	span.card-text {
		display: block;
	}
	.lds-dual-ring {
	  z-index: 9999;
	  position: absolute;
	  top: 50%;
	  left: 50%;
	  transform: translate(-50%, -50%);
	}
	.lds-dual-ring:after {
	  content: " ";
	  display: block;
	  width: 46px;
	  height: 46px;
	  margin: 1px;
	  border-radius: 50%;
	  border: 5px solid #343a40;
	  border-color: #343a40 transparent transparent transparent;
	  animation: lds-dual-ring 1.2s cubic-bezier(0.6, -0.28, 0.74, 0.05) infinite;
	}
	@keyframes lds-dual-ring {
	  0% {
	    transform: rotate(0deg);
	  }
	  100% {
	    transform: rotate(360deg);
	  }
	}
</style>

<script>
	import { mapGetters } from 'vuex'

	export default {
		computed: {
			...mapGetters([
					'returnSearchResults',
					'fetchImages',
					'fetchLoader'
				])
		},
		created() {
			this.$store.commit('changeBgStatus', true);
		}
	}
</script>