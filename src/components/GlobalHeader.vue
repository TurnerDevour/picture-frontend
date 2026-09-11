<template>
  <div class="global-header">
    <a-row :wrap="false">
      <a-col flex="200px">
        <RouterLink to="/">
          <div class="title-bar">
            <img class="logo" src="../assets/logo.png" alt="logo" />
            <div class="title">云图库平台</div>
          </div>
        </RouterLink>
      </a-col>
      <a-col flex="auto">
        <a-menu
          v-model:selectedKeys="current"
          mode="horizontal"
          :items="items"
          @click="handleMenuClick"
        />
      </a-col>
      <a-col>
        <div class="user-login-status">
          <template v-if="loginUserStore.loginUser.id">
            <a-dropdown>
              <ASpace>
                <a-avatar :src="loginUserStore.loginUser.userAvatar" />
                {{ loginUserStore.loginUser.username ?? '云图库用户' }}
              </ASpace>
              <template #overlay>
                <a-menu>
                  <a-menu-item @click="goToUserProfile">
                    <UserOutlined />
                    个人中心
                  </a-menu-item>
                  <a-menu-divider />
                  <a-menu-item @click="doLogout">
                    <LogoutOutlined />
                    退出登录
                  </a-menu-item>
                </a-menu>
              </template>
            </a-dropdown>
          </template>
          <template v-else>
            <a-button type="primary" href="/user/login">登录</a-button>
          </template>
        </div>
      </a-col>
    </a-row>
  </div>
</template>

<script setup lang="ts">
import { computed, h, ref } from 'vue'
import { useRouter } from 'vue-router'
import { type MenuProps, message } from 'ant-design-vue'
import {
  HomeOutlined,
  AppstoreOutlined,
  LogoutOutlined,
  ContactsOutlined,
  UserOutlined,
  DiffOutlined,
  FileImageOutlined,
} from '@ant-design/icons-vue'
import { useLoginUserStore } from '@/stores/useLoginUserStore'
import { logoutUsingPost } from '@/api/userController'
import { ACCESS } from '@/constant/access'

const loginUserStore = useLoginUserStore()

const router = useRouter()
const iconMap = {
  HomeOutlined,
  AppstoreOutlined,
  ContactsOutlined,
  DiffOutlined,
  FileImageOutlined,
} as const
type IconName = keyof typeof iconMap
const isIconName = (value: unknown): value is IconName => {
  return typeof value === 'string' && value in iconMap
}

const current = ref<string[]>([])
const items = computed<NonNullable<MenuProps['items']>>(() =>
  router
    .getRoutes()
    .filter(
      (route) =>
        route.meta?.showNav &&
        route.path &&
        !route.path.includes('/:') &&
        (route.meta?.role !== ACCESS.ADMIN || loginUserStore.loginUser.userRole === ACCESS.ADMIN),
    )
    .map((route) => {
      const menuText = String(route.meta?.title)
      const menuIcon = route.meta?.icon
      return {
        key: route.path,
        label: menuText,
        title: menuText,
        icon: isIconName(menuIcon) ? h(iconMap[menuIcon]) : undefined,
      }
    }),
)

const handleMenuClick: MenuProps['onClick'] = (info) => {
  const key = String(info.key)
  if (key.startsWith('/')) {
    router.push({
      path: key,
    })
  }
}

const goToUserProfile = () => {
  router.push({
    path: '/user/profile',
    query: {
      redirect: router.currentRoute.value.fullPath,
    },
  })
}

// 用户注销
const doLogout = async () => {
  const res = await logoutUsingPost()
  if (res.data.code === 0) {
    loginUserStore.setLoginUser({
      username: '未登录',
    })
    await router.push('/user/login')
    await message.success('退出登录成功')
  } else {
    await message.error('退出登录失败，' + res.data.message)
  }
}

const updateCurrentMenu = (path: string) => {
  const matchedItem = items.value.find((item) => item?.key === path)
  if (matchedItem?.key) {
    current.value = [String(matchedItem.key)]
  } else {
    current.value = []
  }
}

// 高亮当前菜单项
router.afterEach((to) => {
  updateCurrentMenu(to.path)
})

updateCurrentMenu(router.currentRoute.value.path)
</script>

<style scoped>
.title-bar {
  display: flex;
  align-items: center;
}

.title {
  color: black;
  font-size: 18px;
  margin-left: 16px;
}

.logo {
  height: 24px;
}
</style>
