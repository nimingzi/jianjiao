import Vue from 'vue'
import Router from 'vue-router'
import tuijian from '../components/tuijian'
import jiaju4 from '../components/jiaju4'
import jiaju1 from '../components/jiaju1'
import huodong from '../components/huodong'
import search from '../components/search'
import fenlei from '../components/fenlei'
import gouwuche from '../components/gouwuche'
import xiaoxi from '../components/xiaoxi'
import wo from '../components/wo'
import detail from '../components/detail'
import detail2 from '../components/detail2'
import detail3 from '../components/detail3'


Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path:'/tuijian',
      component:tuijian
    },
    {
    	path:'/jiaju4',
    	component:jiaju4
    },
    {
    	path:'/jiaju1',
    	component:jiaju1
    },
    {
    	path:'/huodong',
    	component:huodong
    },
    {
    	path:'/search',
    	component:search
    },
    {
        path:'/fenlei',
        component:fenlei
    },
    {
        path:'/gouwuche',
        component:gouwuche
    },
    {
        path:'/xiaoxi',
        component:xiaoxi
    },
    {
        path:'/wo',
        component:wo
    },
    {
        path:'/detail/:id',
        component:detail
    },
    {
        path:'/detail2/:id',
        component:detail2
    },
    {
        path:'/detail3/:id',
        component:detail3
    },
    {
        path:'*',
        redirect:'/tuijian'
    }
  ]
})
