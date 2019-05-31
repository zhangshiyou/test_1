import Vue from 'vue'
// import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import secosnd from '@/components/secosnd'
import Bar from '@/components/Bar'
import Baz from '@/components/Baz'

import Foo from '@/components/Foo'

// Vue.use(VueRouter)

export default new VueRouter({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
     {
      path: '/a/:id',
      name: 'a',
      component: Baz,
      props: true
    },

	{
      path: '/c',
      name: 'as',
      component: Bar,
      props: true,
      meta:{
      	keepAlive:false
      }
    },    {
      path: '/secosnd',
      name: 'secosnd',
      component: secosnd,
      alias: '/b' ,
      meta:{
      	keepAlive:true
      }
      // children:[{
      // 	path:'asd',
      // 	components:{
	     //  	default: Foo,
	     //    a: Bar,
	     //    b: Baz
      // 	}
      // }]
    }
  ],
  scrollBehavior  (to, from, savedPosition) {
  	if (savedPosition) {
	    return savedPosition
	  } else {
	    return { x: 0, y: 3238 }
	  }
    // return { x: 0, y: 0 }//期望滚动到哪个的位置
  }
})
