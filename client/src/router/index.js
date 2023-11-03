import Vue from 'vue'
import Router from 'vue-router'

// Index
import Index from '@/components/Iron/Index'

// Electrolux
import ElectroluxIndex from '@/components/Iron/Index/IndexElectrolux'
import ElectroluxCreate from '@/components/Iron/Create/CreateElectrolux'
import ElectroluxEdit from '@/components/Iron/Edit/EditElectrolux'
import ElectroluxShow from '@/components/Iron/Show/ShowElectrolux'

// Philips
import PhilipsIndex from '@/components/Iron/Index/IndexPhilips'
import PhilipsCreate from '@/components/Iron/Create/CreatePhilips'
import PhilipsEdit from '@/components/Iron/Edit/EditPhilips'
import PhilipsShow from '@/components/Iron/Show/ShowPhilips'

// Tefal
import TefalIndex from '@/components/Iron/Index/IndexTefal'
import TefalCreate from '@/components/Iron/Create/CreateTefal'
import TefalEdit from '@/components/Iron/Edit/EditTefal'
import TefalShow from '@/components/Iron/Show/ShowTefal'

// Xiaomi
import XiaomiIndex from '@/components/Iron/Index/IndexXiaomi'
import XiaomiCreate from '@/components/Iron/Create/CreateXiaomi'
import XiaomiEdit from '@/components/Iron/Edit/EditXiaomi'
import XiaomiShow from '@/components/Iron/Show/ShowXiaomi'

Vue.use(Router)

export default new Router({
  routes: [
    // Index
    {
      path: '/index',
      name: 'index',
      component: Index
    },
    
    // Electrolux
    {
      path: '/electroluxs',
      name: 'electroluxs',
      component: ElectroluxIndex
    },
    {
      path: '/electrolux/create',
      name: 'electrolux-create',
      component: ElectroluxCreate
    },
    {
      path: '/electrolux/edit/:electroluxId',
      name: 'electrolux-edit',
      component: ElectroluxEdit
    },
    {
      path: '/electrolux/:electroluxId',
      name: 'electrolux',
      component: ElectroluxShow
    },

    // Philips
    {
      path: '/philipss',
      name: 'philipss',
      component: PhilipsIndex
    },
    {
      path: '/philips/create',
      name: 'philips-create',
      component: PhilipsCreate
    },
    {
      path: '/philips/edit/:philipsId',
      name: 'philips-edit',
      component: PhilipsEdit
    },
    {
      path: '/philips/:philipsId',
      name: 'philips',
      component: PhilipsShow
    },

    // Tefal
    {
      path: '/tefals',
      name: 'tefals',
      component: TefalIndex
    },
    {
      path: '/tefal/create',
      name: 'tefal-create',
      component: TefalCreate
    },
    {
      path: '/tefal/edit/:tefalId',
      name: 'tefal-edit',
      component: TefalEdit
    },
    {
      path: '/tefal/:tefalId',
      name: 'tefal',
      component: TefalShow
    },

    // Xiaomi
    {
      path: '/xiaomis',
      name: 'xiaomis',
      component: XiaomiIndex
    },
    {
      path: '/xiaomi/create',
      name: 'xiaomi-create',
      component: XiaomiCreate
    },
    {
      path: '/xiaomi/edit/:xiaomiId',
      name: 'xiaomi-edit',
      component: XiaomiEdit
    },
    {
      path: '/xiaomi/:xiaomiId',
      name: 'xiaomi',
      component: XiaomiShow
    },

    // {
    //   path: '/login',
    //   name: 'login',
    //   component: Login
    //  },
  ]
})
