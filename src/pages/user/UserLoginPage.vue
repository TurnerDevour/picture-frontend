<template>
  <div class="user-login-page">
    <h2 class="title">云图库 - 用户登录</h2>
    <div class="desc">智能协同云图库</div>
    <a-form :model="formState" name="basic" autocomplete="off" @finish="handleSubmit">
      <a-form-item
        name="userAccount"
        :rules="[
          { required: true, message: '请输入账号' },
          { min: 4, message: '账号不能小于 4 位' },
          { max: 20, message: '账号不能大于 20 位' },
        ]"
      >
        <a-input v-model:value="formState.userAccount" placeholder="请输入账号" />
      </a-form-item>
      <a-form-item
        name="userPassword"
        :rules="[
          { required: true, message: '请输入密码' },
          { min: 6, message: '密码不能小于 6 位' },
          { max: 20, message: '密码不能大于 20 位' },
        ]"
      >
        <a-input-password v-model:value="formState.userPassword" placeholder="请输入密码" />
      </a-form-item>
      <div class="tips">
        没有账号？
        <RouterLink to="/user/register">去注册</RouterLink>
      </div>
      <a-form-item>
        <a-button type="primary" html-type="submit" style="width: 100%">登录</a-button>
      </a-form-item>
    </a-form>
  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue'
import { useRouter } from 'vue-router'
import { useLoginUserStore } from '@/stores/useLoginUserStore'
import { message } from 'ant-design-vue'
import { loginUsingPost } from '@/api/userController'
const router = useRouter()
const loginUserStore = useLoginUserStore()

const formState = reactive<API.UserLoginDTO>({
  userAccount: '',
  userPassword: '',
})

/**
 * 提交表单
 * @param values
 */
const handleSubmit = async (values: API.UserLoginDTO) => {
  const res = await loginUsingPost(values)
  // 登录成功，把登录态保存到全局状态中
  if (res.data.code === 0 && res.data.data) {
    await loginUserStore.fetchLoginUser()
    await router.push({
      path: '/',
      replace: true,
    })
    await message.success('登录成功')
  } else {
    await message.error('登录失败，' + res.data.message)
  }
}
</script>

<style scoped>
.user-login-page {
  max-width: 360px;
  margin: 0 auto;
}

.title {
  text-align: center;
  margin-bottom: 16px;
}

.desc {
  text-align: center;
  color: #bbb;
  margin-bottom: 16px;
}

.tips {
  margin-bottom: 16px;
  color: #bbb;
  font-size: 13px;
  text-align: right;
}
</style>
