import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import doctor from '@/components/doctor'
import patient from '@/components/patient'
import Split from '@/components/Split'
import Train from '@/components/Train'
import PatForgetpwd from '@/components/PatForgetpwd'
import PatRegister from '@/components/PatRegister'
import DrForgetpwd from '@/components/DrForgetpwd'
import DrRegister from '@/components/DrRegister'
import Statistics from '@/components/Statistics'
Vue.use(Router)

export default new Router({
  routes: [{
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
  }, {
    path: '/Split',
    name: 'Split',
    component: Split
  }, {
    path: '/Train',
    name: 'Train',
    component: Train
  }, {
    path: '/PatForgetpwd',
    name: 'PatForgetpwd',
    component: PatForgetpwd
  }, {
    path: '/PatRegister',
    name: 'PatRegister',
    component: PatRegister
  },
  {
    path: '/DrForgetpwd',
    name: 'DrForgetpwd',
    component: DrForgetpwd
  }, {
    path: '/DrRegister',
    name: 'DrRegister',
    component: DrRegister
  }, {
    path: '/Statistics',
    name: 'Statistics',
    component: Statistics
  },
  ]
})