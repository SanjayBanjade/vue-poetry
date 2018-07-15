<template>
	<div class="wrapper">
		<div class="lds-dual-ring" v-show="fetchLoader"></div>
		<div class="container pt-5">
			<div class="row">
				<div 
					class="col-sm-4" 
					v-if="fetchData.length > 0" 
					v-for="(poetry, index) in fetchData.slice(pagination.start, pagination.end)">
					<div class="card">
					    <img 
					    	class="card-img-top"
					    	v-if="fetchImages.length > 0"
					    	:src="fetchImages[index + pagination.start].largeImageURL.toLowerCase()" 
					    	alt="Card image cap" @load="imageLoad($event)" v-show="loadImage">
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
			<nav aria-label="Page navigation example pt-5" style="padding-top: 3em;" v-if="!fetchLoader">
			  	<ul class="pagination justify-content-center">
			  		<router-link :to="{name: 'poetrycard', params: {id: pagination.page - 1} }" tag="li" class="page-item" v-if="pagination.page !== 1" @click.native="paginate('-')">
			  			<a class="page-link">Page {{ pageNumber - 1 }}</a>
			  		</router-link>
			  		<router-link :to="{name: 'poetrycard', params: {id: pagination.page + 1} }" tag="li" class="page-item" v-if="pagination.page !== totalPages" @click.native="paginate('+')">
			  			<a class="page-link">Page {{ pageNumber + 1 }}</a>
			  		</router-link>
			  	</ul>
			</nav>
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
	import { mapGetters } from 'vuex';

	export default {
		data() {
			return {
				imageIndex: 0,
				loadImage: false,
				pagination: {
					start: 0,
					end: 10,
					resPerPage: 10,
					page: 1,
					pageId: Number(this.$route.params.id)
				}
			}
		},
		computed: {
			...mapGetters([
					'fetchData',
					'fetchImages',
					'fetchLoader',
				]),
			totalPages() {
				return this.$store.getters.totalPages;
			},
			pageNumber() {
				return this.pagination.page;
			},
		},
		methods: {
			paginate(sign) {
				let pagination = this.pagination;
				
				this.loadImage = false;

				window.scrollTo(0, 0);

				if(sign === '+') {
					pagination.page++;
					pagination.start += pagination.resPerPage;
					pagination.end += pagination.resPerPage;
				}
				if(sign === '-') {
					pagination.page--;
					pagination.start -= pagination.resPerPage;
					pagination.end -= pagination.resPerPage;
				}
			},
			imageLoad(e) {
				if(e.target.complete) {
					this.loadImage = true;
				}
			},
		},
		created() {
			this.$store.commit('changeBgStatus', true);

			let page = this.pagination;

			if(page.pageId < 1 || page.pageId > 16 || isNaN(page.pageId) === true) {
				this.$router.push('/poetry/1');
			} else if (page.pageId >= 1  || page.pageId <= totalPage && isNaN(page.pageId) === false) {
				const start = (parseInt(page.pageId) - 1) * page.resPerPage;
				const end = start + page.resPerPage;

				page.start = start;
				page.end = end;
				page.page = parseInt(page.pageId);
			}
		}
	}
</script>