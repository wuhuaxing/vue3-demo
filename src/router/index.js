/*
 * @Author: your name
 * @Date: 2021-02-07 16:03:29
 * @LastEditTime: 2021-02-07 16:47:22
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue3-demo\src\router\index.js
 */

import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
    {
        path: '/',
        name: 'index',
        component: () => import('../views/index.vue')
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
});

export default router;
