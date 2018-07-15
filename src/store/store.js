import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

export const store = new Vuex.Store({
	state: {
		main: {
			bgStat: false
		},
		proxy: 'https://cors-anywhere.herokuapp.com/',
		text: [],
		images: [],
		loader: true,
		resPerPage: 10,
		filteredData: []
	},
	mutations: {
		changeBgStatus(state, payload) {
			state.main.bgStat = payload;
		},
		setTextData(state, payload) {
			state.text = payload;
		},
		setImageData(state, payload) {
			state.images = payload;
		},
		searchData(state, payload) {
			state.filteredData = state.text.filter(value => value.title.toLowerCase().match(payload));
		}
 	},
	actions: {
		async fetchPoemData({commit}) {
			try {               
			    const res = await axios(`${this.state.proxy}http://poetrydb.org/author,title/Shakespeare;Sonnet`);
			    this.state.loader = false;
			    commit('setTextData', res.data);
			} catch(error) {
			    console.log(error);
			}
		},
		async fetchPoemImages({commit}) {
			const key = '9520054-7cf775cfe7a0d903224a0f896';
			const perPage = 154;
			try {
			    const res = await axios(`${this.state.proxy}https://pixabay.com/api/?key=${key}&per_page=${perPage}`);  
			    commit('setImageData', res.data.hits);
			} catch(error) {
			    console.log(error);
			}
		},
	},
	getters: {
		fetchData(state) {
			return state.text;
		},
		fetchImages(state) {
			return state.images;
		},
		fetchLoader(state) {
			return state.loader;
		},
		returnSearchResults(state) {
			return state.filteredData;
		}
	}
});