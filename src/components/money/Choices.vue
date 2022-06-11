<template>
  <div class="choices">
    <div class="inner">
      <div v-for="item in dataSource" :key="item" @click="Select(item.id)"
           :class="selected === item.id && 'selected'">
        <Icon :name="`${item.id}`"/>
        <span>{{ item.name }}</span>
      </div>
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
      this.selected = value;
      this.$emit('update:choice', this.selected)
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
  flex-grow: 1;
  margin-top: 30px;
  padding-top: 16px;
  overflow-x: hidden;
  overflow-y: auto;
  margin-left: auto;
  margin-right: auto;

  > .inner {
    width: 100vw;
    display: flex;
    flex-wrap: wrap;
    margin-right: -8vw;

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

}
</style>