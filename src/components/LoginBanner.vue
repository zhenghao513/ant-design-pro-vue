<template>
  <div class="banner">
    <div class="banner-inner">
      <a-carousel arrows>
        <template #prevArrow>
          <div
            class="custom-slick-arrow"
            style="left: 10px; z-index: 1"
          >
            <left-circle-outlined />
          </div>
        </template>
        <template #nextArrow>
          <div
            class="custom-slick-arrow"
            style="right: 10px"
          >
            <right-circle-outlined />
          </div>
        </template>
        <template
          v-for="item in carouselItem"
          :key="item.slogan"
        >
          <div class="carousel-item">
            <div class="carousel-title">{{ item.slogan }}</div>
            <div class="carousel-sub-title">{{ item.subSlogan }}</div>
            <img
              class="carousel-image"
              :src="item.image"
            />
          </div>
        </template>
      </a-carousel>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { LeftCircleOutlined, RightCircleOutlined } from '@ant-design/icons-vue';

  interface CarouselItemType {
    slogan: string;
    subSlogan: string;
    image: string;
  }
  const carouselItem: CarouselItemType[] = [
    {
      image: 'http://vue-pro.arco.design/assets/login-banner.426fb77f.png',
      slogan: '开箱即用的高质量模板',
      subSlogan: '丰富的的页面模板，覆盖大多数典型业务场景',
    },
    {
      image: 'http://vue-pro.arco.design/assets/login-banner.426fb77f.png',
      slogan: '内置了常见问题的解决方案',
      subSlogan: '国际化，路由配置，状态管理应有尽有',
    },
    {
      image: 'http://vue-pro.arco.design/assets/login-banner.426fb77f.png',
      slogan: '接入可视化增强工具AUX',
      subSlogan: '实现灵活的区块式开发',
    },
  ];
</script>

<style scoped>
  .banner {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .banner-inner {
    flex: 1;
    height: 100vh;
    width: 100%;
  }

  :deep(.slick-slide) {
    display: flex !important;
    justify-content: center;
    align-items: center;
    height: 100vh;
  }

  :deep(.slick-arrow.custom-slick-arrow) {
    width: 25px;
    height: 25px;
    font-size: 25px;
    color: #fff;
    background-color: rgba(31, 45, 61, 0.11);
    transition: ease all 0.3s;
    opacity: 0.3;
    z-index: 1;
  }
  :deep(.slick-arrow.custom-slick-arrow:before) {
    display: none;
  }
  :deep(.slick-arrow.custom-slick-arrow:hover) {
    color: #fff;
    opacity: 0.5;
  }

  .carousel-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
  }

  .carousel-title {
    color: #f7f8fa;
    font-weight: 500;
    font-size: 20px;
    line-height: 28px;
  }

  .carousel-sub-title {
    margin-top: 8px;
    color: #86909c;
    font-size: 14px;
    line-height: 22px;
  }

  .carousel-image {
    width: 320px;
    margin-top: 30px;
  }
</style>
