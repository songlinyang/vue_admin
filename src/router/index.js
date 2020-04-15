/*
路由模块
*/

import Vue from 'vue'
import VueRouter from 'vue-router'

import About from '../views/about.vue'
import Home from '../views/home.vue'


Vue.use(VueRouter) //使用插件

export default new VueRouter({
    routes : [
        {
            path: '/about',
            component: About
        },
        {
            path: '/home',
            component: Home,
            children : [
                {
                    path : 'news',
                    component : () => import('../views/news.vue'),
                    children: [
                        {
                            path: '/home/news/details/:id', //使用占位语法
                            component : () => import('../views/detail.vue')

                        }
                    ]
                },
                {
                    path : 'messages',
                    component : () => import('../views/message.vue')
                }
            ]
        },
        {
            path: '/',
            redirect: '/about'
        }
    ] 
})