<template>
  <div class="login-form-wrapper">
    <div class="login-form-title">{{ loginFormTitle }}</div>
    <div class="login-form-sub-title">{{ loginFormTitle }}</div>
    <div class="login-form-error-msg"></div>
    <a-form
      :model="formState"
      @finish="onFinish"
      @finishFailed="onFinishFailed"
    >
      <a-form-item
        name="username"
        :rules="[{ required: true, message: '用户名不能为空' }]"
      >
        <a-input
          v-model:value="formState.username"
          placeholder="用户名：admin"
        >
          <template #prefix><UserOutlined style="color: rgba(0, 0, 0, 0.25)" /></template>
        </a-input>
      </a-form-item>

      <a-form-item
        name="password"
        :rules="[{ required: true, message: '密码不能为空' }]"
      >
        <a-input-password
          v-model:value="formState.password"
          placeholder="密码：admin"
        >
          <template #prefix><LockOutlined style="color: rgba(0, 0, 0, 0.25)" /></template>
        </a-input-password>
      </a-form-item>

      <div class="login-form-password-actions">
        <a-form-item name="remember">
          <a-checkbox v-model:checked="formState.remember">记住密码</a-checkbox>
        </a-form-item>
        <a-button type="link">忘记密码</a-button>
      </div>
      <a-space
        :size="16"
        direction="vertical"
        style="width: 100%"
      >
        <a-button
          type="primary"
          block
          html-type="submit"
        >
          登录
        </a-button>
        <a-button
          block
          type="text"
        >
          注册账号
        </a-button>
      </a-space>
    </a-form>
  </div>
</template>

<script setup lang="ts">
  import { UserOutlined, LockOutlined } from '@ant-design/icons-vue';
  import { useStorage } from '@vueuse/core';

  const loginConfig = useStorage('login-config', {
    remember: true,
    username: 'admin',
    password: 'admin',
  });

  interface FormState {
    username: string;
    password: string;
    remember: boolean;
  }

  const formState = reactive<FormState>({
    username: loginConfig.value.username,
    password: loginConfig.value.password,
    remember: loginConfig.value.remember,
  });

  watch(
    () => formState.remember,
    (newValue) => {
      loginConfig.value.remember = newValue;
    },
  );

  const onFinish = (values: any) => {
    const { remember } = loginConfig.value;
    const { username, password } = values;

    loginConfig.value.username = remember ? username : '';
    loginConfig.value.password = remember ? password : '';
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  const loginFormTitle = '登录 Ant Design Pro';
</script>

<style scoped>
  .login-form-wrapper {
    width: 320px;
  }

  .login-form-title {
    color: #1d2129;
    font-weight: 500;
    font-size: 24px;
    line-height: 32px;
  }

  .login-form-sub-title {
    color: #86909c;
    font-size: 16px;
    line-height: 24px;
  }

  .login-form-error-msg {
    height: 32px;
  }

  .login-form-password-actions {
    display: flex;
    justify-content: space-between;
  }
</style>
