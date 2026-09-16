import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'
import HomePage from '@/pages/HomePage.vue'
import { ACCESS } from '@/constant/access'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    meta: { title: '主页', icon: 'HomeOutlined', role: ACCESS.USER, showNav: true },
    component: HomePage,
  },
  {
    path: '/user/login',
    name: 'login',
    meta: { title: '登录', icon: 'LoginOutlined', role: ACCESS.USER, showNav: false },
    component: () => import('@/pages/user/UserLoginPage.vue'),
  },
  {
    path: '/user/register',
    name: 'register',
    meta: { title: '注册', icon: 'UserAddOutlined', role: ACCESS.USER, showNav: false },
    component: () => import('@/pages/user/UserRegisterPage.vue'),
  },
  {
    path: '/user/profile',
    name: 'userProfile',
    meta: { title: '个人中心', role: ACCESS.USER, showNav: false, requiresAuth: true },
    component: () => import('@/pages/user/UserProfilePage.vue'),
  },
  {
    path: '/about',
    name: 'about',
    meta: { title: '关于', icon: 'AppstoreOutlined', role: ACCESS.USER, showNav: true },
    component: () => import('@/pages/AboutPage.vue'),
  },
  {
    path: '/admin/userManage',
    name: 'userManage',
    meta: { title: '用户管理', icon: 'ContactsOutlined', role: ACCESS.ADMIN, showNav: true },
    component: () => import('@/pages/admin/UserManagePage.vue'),
  },
  {
    path: '/admin/pictureManage',
    name: 'pictureManage',
    meta: { title: '图片管理', icon: 'FileImageOutlined', role: ACCESS.ADMIN, showNav: true },
    component: () => import('@/pages/admin/PictureManagePage.vue'),
  },
  {
    path: '/admin/add_picture/batch',
    name: 'addPictureBatch',
    meta: { title: '批量添加图片', icon: 'FileAddOutlined', role: ACCESS.ADMIN, showNav: false },
    component: () => import('@/pages/AddPictureBathPage.vue'),
  },
  {
    path: '/add_picture',
    name: 'addPicture',
    meta: { title: '创建图片', icon: 'DiffOutlined', role: ACCESS.USER, showNav: true },
    component: () => import('@/pages/AddPicturePage.vue'),
  },
  {
    path: '/picture/:id',
    name: 'pictureDetail',
    meta: { title: '图片详情', role: ACCESS.USER, showNav: false },
    component: () => import('@/pages/PictureDetailPage.vue'),
    props: true,
  },
  {
    path: '/admin/spaceManage',
    name: 'spaceManage',
    meta: { title: '空间管理', icon: 'CloudOutlined', role: ACCESS.ADMIN, showNav: true },
    component: () => import('@/pages/admin/SpaceManagePage.vue'),
  },
  {
    path: '/add_space',
    name: 'addSpace',
    meta: { title: '添加空间', icon: 'CloudUploadOutlined', role: ACCESS.USER, showNav: false },
    component: () => import('@/pages/AddSpacePage.vue'),
  },
  {
    path: '/my_space',
    name: 'mySpace',
    meta: { title: '我的空间', icon: 'CloudOutlined', role: ACCESS.USER, showNav: false },
    component: () => import('@/pages/MySpacePage.vue'),
  },
  {
    path: '/space/:id',
    name: 'spaceDetail',
    meta: { title: '空间详情', role: ACCESS.USER, showNav: false },
    component: () => import('@/pages/SpaceDetailPage.vue'),
    props: true,
  },
  {
    path: '/search_picture',
    name: 'searchPicture',
    meta: { title: '搜索图片', icon: 'SearchOutlined', role: ACCESS.USER, showNav: false },
    component: () => import('@/pages/SearchPicturePage.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
