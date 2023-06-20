<template>
  <div class="container">
    <LoginLogo />
    <LoginBanner />
    <div class="content">
      <div class="content-inner">
        <LoginForm />
      </div>
      <a-layout-footer>
        <div class="footer">Ant Design Pro</div>
      </a-layout-footer>
    </div>
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped>
  .container {
    display: flex;
    height: 100vh;
  }

  .banner {
    width: 550px;
    background: linear-gradient(163.85deg, #1d2129 0%, #00308f 100%);
  }

  .content {
    position: relative;
    display: flex;
    flex: 1;
    align-items: center;
    justify-content: center;
    padding-bottom: 40px;
  }

  .footer {
    position: absolute;
    right: 0;
    bottom: 0;
    width: 100%;
  }

  .container .footer {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 40px;
    color: #4e5969;
    text-align: center;
  }
</style>