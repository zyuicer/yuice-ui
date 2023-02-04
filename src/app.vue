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
          <YuCol :span="4" class="item1"></YuCol>
          <YuCol :span="4" class="item"></YuCol>
        </YuRow>
      </YuMain>
    </YuContainer>
    <YuFooter>footer</YuFooter>
  </YuContainer>
</template>
<script>
import {
  YuButton,
  YuAvatar,
  YuCol,
  YuRow,
  YuHeader,
  YuFooter,
  YuContainer,
  YuMain,
  YuAside,
  YuCarousel,
  YuCarouselItem
} from "../lib";
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
    YuAside
    // YuCarousel,
    // YuCarouselItem
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
</style>
