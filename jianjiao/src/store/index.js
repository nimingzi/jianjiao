import Vuex from 'vuex'
import Vue from 'vue'
import axios from 'axios'

Vue.use(Vuex);

const store=new Vuex.Store({
	state:{
		swipelist:[],
		list:[],
		furnitureList:[],
		homelist:[],
		activelist:[],
		isShow:true
	},

	actions:{
		swipelistAction(store,payload){
			axios.get("/v2/page?pageId=1&tabId=1&_=1533106538003").then((res)=>{
				store.commit("swipelistMutation",res.data.data.modules[0].moduleContent.banners);
			});
			
		},
		listAction(store,payload){
			axios.get("/v2/page?pageId=1&tabId=1&_=1533106538003").then((res)=>{
				store.commit("listMutation",res.data.data.modules);
			});
			
		},
		furnitureAction(store,payload){
			axios.get("/v2/page?pageId=1&tabId=10005&_=1533169255473").then((res)=>{
				store.commit("furnitureMutation",res.data.data.modules);
			});
		},
		homelistAction(store,payload){
			axios.get("/v2/page?pageId=1&tabId=10006&_=1533196334775").then((res)=>{
				store.commit("homelistMutation",res.data.data.modules);
			});
		},
		activelistAction(store,payload){
			axios.get("/v2/page?pageId=1&tabId=10010&_=1533197009997").then((res)=>{
				store.commit("activelistMutation",res.data.data.modules);
			});
		},
		isShowAction(store,payload){
			store.commit("isShowMutation",payload);
		}
	},

	mutations:{
		swipelistMutation(state,payload){
			state.swipelist=payload;
		},
		listMutation(state,payload){
			state.list=payload;
		},
		furnitureMutation(state,payload){
			state.furnitureList=payload;
		},
		homelistMutation(state,payload){
			state.homelist=payload;
		},
		activelistMutation(state,payload){
			state.activelist=payload;
		},
		isShowMutation(state,payload){
			state.isShow=payload;
		}
	}
});

export default store;