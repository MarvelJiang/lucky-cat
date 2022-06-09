<template>
  <div class="choices">
    <div v-for="(key,value) in dataSource" :key="value" @click="Select(value)"
         :class="selected === value && 'selected'">
      <Icon :name="`${value}`"/>
      <span>{{ key }}</span>
    </div>
    <!--    <div class="selected">-->
    <!--      <Icon name="eat"/>-->
    <!--      <span>餐饮</span>-->
    <!--    </div>-->
    <!--    <div>-->
    <!--      <Icon name="clothes"/>-->
    <!--      <span>服饰</span>-->
    <!--    </div>-->
    <!--    <div>-->
    <!--      <Icon name="house"/>-->
    <!--      <span>房租</span>-->
    <!--    </div>-->
    <!--    <div>-->
    <!--      <Icon name="bus"/>-->
    <!--      <span>交通</span>-->
    <!--    </div>-->
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import {Component, Prop} from "vue-property-decorator";

@Component
export default class Choices extends Vue {
  selected = '';
  @Prop() dataSource: any;


  Select(value: string) {
    if (this.selected !== value) {
      this.selected = value
    } else {
      this.selected = ''
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~@/assets/style/reset.scss";
@import "~@/assets/style/helper.scss";

.choices {
  display: flex;
  flex-wrap: wrap;
  flex-grow: 1;
  margin-top: 30px;
  padding-left: 4vw;
  padding-right: 4vw;
  padding-top: 16px;
  margin-right: -8vw;
  overflow: auto;

  > div {
    border: 4px solid $color;
    margin-top: 8px;
    margin-right: 8vw;
    padding: 8px;
    height: 17vw;
    width: 17vw;
    border-radius: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    opacity: 0.7;

    &.selected {
      border: 4px solid rgb(235, 101, 126);
      opacity: 1;
    }
  }
}
</style>