<template>
  <YuContainer>
    <YuHeader>header</YuHeader>
    <YuContainer>
      <YuAside width="200px">
        <div class="aside">
          <YuAvatar> 1 </YuAvatar>
          <YuSwitch
            v-model="isActive"
            style="--yu-switch-on-color: #ff4949; --yu-switch-off-color: #000"
          ></YuSwitch>
          <YuSwitch v-model="isActive" size="small"></YuSwitch>
          <YuSwitch v-model="isActive" size="large"></YuSwitch>
          <YuSwitch
            v-model="isActive"
            style="--yu-switch-on-color: #ff4949; --yu-switch-off-color: #ccc"
            activeText="left"
            inactiveText="rightit"
          ></YuSwitch>
          <YuSwitch
            v-model="isActive"
            size="small"
            style="--yu-switch-on-color: #ff4949; --yu-switch-off-color: #ccc"
            activeText="left"
            inactiveText="rightit"
          ></YuSwitch>
          <YuSwitch
            v-model="isActive"
            disabled
            size="large"
            style="--yu-switch-on-color: #ff4949; --yu-switch-off-color: #ccc"
            activeText="left"
            inactiveText="rightit"
          ></YuSwitch>
        </div>
      </YuAside>
      <YuMain>
        <YuRow justify="center" :gutter="20">
          <YuCol :span="6" class="item">
            <YuButton type="warning" @click="hiddenMessage" size="large" plain
              >关闭message</YuButton
            >
            <YuButton type="primary" size="large" plain @click="showMessage"
              >开启message</YuButton
            >
          </YuCol>
          <YuCol :span="4" class="item1">
            <YuButton size="large" type="danger" @click="showMessageBox" round
              >round</YuButton
            >
          </YuCol>
          <YuCol :span="4" class="item">
            <YuSwitch
              v-model="isActive"
              inlinePrompt
              width="60px"
              disabled
              style="--yu-switch-on-color: #ff4949; --yu-switch-off-color: #ccc"
              activeText="超出省略"
              inactiveText="超出省略"
            ></YuSwitch>
          </YuCol>
        </YuRow>
      </YuMain>
    </YuContainer>
    <YuFooter>footer</YuFooter>
  </YuContainer>
  <div style="background-color: peru">
    <YuCarousel height="400px" :initialIndex="1" @change="onChange">
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
  <div class="test-image">
    <YuImage
      src="https://img2.baidu.com/it/u=1395980100,2999837177&fm=253&fmt=auto&app=120&f=JPEG?w=1200&h=675"
    />
  </div>
</template>
<script>
import { h, ref } from "vue";
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
  YuImage,
  YuAvatar,
  YuSwitch,
  YuMessage,
  YuMessageBox
} from "../lib";
export default {
  components: {
    YuButton: YuButton,
    YuAvatar,
    YuCol,
    YuRow,
    YuHeader,
    YuContainer,
    YuFooter,
    YuMain,
    YuAside,
    YuCarousel,
    YuImage,
    YuCarouselItem,
    YuSwitch
  },
  setup() {
    const handlerTest = () => {
      console.log("ok");
    };
    function onChange(num, pre) {
      //
    }
    let handler;
    const showMessage = () => {
      handler = YuMessage({
        message: h("div", {}, "test11"),
        type: "warning"
      });
    };
    const showMessageBox = () => {
      YuMessageBox({
        title: "test"
      });
    };
    const isActive = ref(false);
    const hiddenMessage = () => {
      handler.close();
    };
    return {
      handlerTest,
      onChange,
      hiddenMessage,
      showMessage,
      isActive,
      showMessageBox
    };
  }
};
</script>

<style lang="scss" scoped>
.aside {
  height: 200px;
  width: 100%;
  background-color: red;
  transition: all 0.2s ease;
  position: relative;
}
.tt {
  width: 60px;
  height: 60px;
  position: absolute;
  left: 0px;
  top: 50%;
  background-color: #fff;
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
