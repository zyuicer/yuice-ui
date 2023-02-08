<template>
  <YuContainer>
    <YuHeader>header</YuHeader>
    <YuContainer>
      <YuAside width="200px"><div class="aside">aside</div></YuAside>
      <YuMain>
        <YuRow justify="center" :gutter="20">
          <YuCol :span="4" class="item">
            <YuButton type="warning" size="large" plain>test</YuButton>
            <YuButton type="primary" size="large" plain>test</YuButton>
          </YuCol>
          <YuCol :span="4" class="item1">
            <YuButton size="large" type="danger" round>round</YuButton>
          </YuCol>
          <YuCol :span="4" class="item"> </YuCol>
        </YuRow>
      </YuMain>
    </YuContainer>
    <YuFooter>footer</YuFooter>
  </YuContainer>
  <div style="background-color: peru">
    <YuCarousel height="400px" :initialIndex="1" indicatorPosition="outside">
      <YuCarouselItem>
        <img
          src="https://img2.baidu.com/it/u=1395980100,2999837177&fm=253&fmt=auto&app=120&f=JPEG?w=1200&h=675"
          alt=""
        />
      </YuCarouselItem>
      <YuCarouselItem>
        <h1 class="swiper-item-2">1</h1>
      </YuCarouselItem>
      <YuCarouselItem>
        <h1 class="swiper-item-3">2</h1>
      </YuCarouselItem>
      <YuCarouselItem>
        <h1 class="swiper-item-4">3</h1>
      </YuCarouselItem>
      <YuCarouselItem>
        <h1 class="swiper-item-5">4</h1>
      </YuCarouselItem>
    </YuCarousel>
  </div>
</template>
<script>
import {
  YuButton,
  YuCol,
  YuRow,
  YuHeader,
  YuFooter,
  YuContainer,
  YuMain,
  YuAside,
  YuCarousel,
  YuCarouselItem,
  YuIcon
} from "../lib";
import ArrowLeft from "../yu-icon/arrowLeft";
export default {
  components: {
    YuButton: YuButton,
    // YuAvatar,
    YuCol,
    YuRow,
    YuHeader,
    YuContainer,
    YuFooter,
    YuMain,
    YuAside,
    YuCarousel,
    YuCarouselItem
  },
  setup() {
    const handlerTest = () => {
      console.log("ok");
    };

    return {
      handlerTest
    };
  }
};
</script>

<style lang="scss" scoped>
.aside {
  height: 200px;
  width: 100%;
  background-color: red;
}
.item {
  height: 80px;
  background-color: #d5dce5;
  border-radius: 15px;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
}
.item1 {
  height: 80px;
  background-color: #e6e9f1;
  border-radius: 15px;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
}
.swiper-item-1 {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: green;
  margin: 0;
}
.swiper-item-2 {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: red;
  margin: 0;
}
.swiper-item-3 {
  height: 100%;
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: blue;
}
.swiper-item-4 {
  height: 100%;
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: pink;
}
.swiper-item-5 {
  height: 100%;
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: orange;
}
img {
  width: 100%;
  height: 100%;
}
</style>
