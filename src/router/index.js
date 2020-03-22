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
import DrHome from '@/components/doctorfolder/DrHome'
import DrpatientList from '@/components/doctorfolder/patientList'

import PatCheck from '@/components/patientfolder/PatCheck'
import PatCheckRecord from '@/components/patientfolder/PatCheckRecord'
import PatInfo from '@/components/patientfolder/PatInfo'
import PatEvaluation from '@/components/patientfolder/PatEvaluation'
import PatapptRecord from '@/components/patientfolder/apptRecord'
import PatapptDetail from '@/components/patientfolder/apptDetail'
import PathospitalList from '@/components/patientfolder/hospitalList'
import PatdoctorList from '@/components/patientfolder/doctorList'
import PatRiskDetail from '@/components/patientfolder/PatRiskdetail'
import PatMainpage from '@/components/patientcombination/pmainpage'



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
    component: doctor,
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
  }, {
    path: '/doctor/home',
    name: '/doctor/home',
    component: DrHome
  }, {
    path: '/doctor/patientList',
    name: '/doctor/patientList',
    component: DrpatientList
  },
  {
    path: '/patient',
    name: 'patient',
    component: patient
  },
  {
    path: '/patient/main',
    name: '/patient/main',
    component: PatMainpage
  },
  {
    path: '/patient/check',
    name: '/patient/check',
    component: PatCheck
  }, {
    path: '/patient/risk',
    name: '/patient/risk',
    component: PatRiskDetail
  }, {
    path: '/patient/check/risk',
    name: '/patient/check/risk',
    component: PatCheckRecord
  }, {
    path: '/patient/form',
    name: '/patient/form',
    component: PatInfo
  }, {
    path: '/patient/evaluation',
    name: '/patient/evaluation',
    component: PatEvaluation
  }, {
    path: '/patient/appt/record',
    name: '/patient/appt/record',
    component: PatapptRecord
  },
  {
    path: '/patient/appt/consulation',
    name: '/patient/appt/consulation',
    component: PathospitalList
  }, {
    path: '/patient/appt',
    name: '/patient/appt',
    component: PatdoctorList
  }, {
    path: '/appt_detail',
    name: '/appt_detail',
    component: PatapptDetail
  }

  ]
})