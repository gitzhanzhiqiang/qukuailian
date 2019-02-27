import Template from '@src/views/layout/template';
import contact from './page';
import pagetali from './pagetali';
import pageta from './pageta';
module.exports = {
  path: '/sunfin',
  component: Template,
  meta: {
    title: '首页'
  },
  children: [
    {
      path: 'contactUs',
      name: 'contact_index',
      component: contact,
      meta: {
        title: '联系我们'
      },
      
    },
    {
      path: 'pagetali',
      name: 'contact_pagetali',
      component: pagetali,
      meta: {
        title: '成功'
      },
      
    },
    {
      path: 'pageta',
      name: 'contact_pageta',
      component: pageta,
      meta: {
        title: '成功'
      },
      
    }
  ]
}
