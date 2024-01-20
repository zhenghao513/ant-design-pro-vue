<template>
  <div class="logo">
    <img
      alt="logo"
      src="https://www.antdv.com/assets/logo.1ef800a8.svg"
      width="32"
    />
    <div class="logo-text">Ant Design Pro</div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
  .logo {
    position: fixed;
    top: 24px;
    left: 22px;
    z-index: 1;
    display: inline-flex;
    align-items: center;
  }

  .logo-text {
    margin-right: 4px;
    margin-left: 4px;
    color: #f7f8fa;
    font-size: 20px;
  }

  @media (max-width: 912px) {
    .logo-text {
      color: #1d2129;
    }
  }
</style>
