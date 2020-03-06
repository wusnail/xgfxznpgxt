import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import doctor from '@/components/doctor'
import patient from '@/components/patient'
import Split from '@/components/Split'
import Train from '@/components/Train'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/doctor',
      name: 'doctor',
      component: doctor
    },
    {
      path: '/patient',
      name: 'patient',
      component: patient
    },{
    path: '/Split',
    name: 'Split',
    component: Split
  }, {
    path: '/Train',
    name: 'Train',
    component: Train
  }
  ]
})
