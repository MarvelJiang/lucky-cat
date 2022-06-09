<template>
  <div>
    <ul class="types">
      <li :class="type === '支出' && 'selected'"
          @click="selectType('支出')">支出
      </li>
      <li :class="type === '收入' && 'selected'"
          @click="selectType('收入')">收入
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import {Component, Prop} from "vue-property-decorator";

@Component
export default class Types extends Vue {
  @Prop() readonly type!: string;

  selectType(type: string) {
    this.$emit('update:type', type)
  }

  // type = '支出';

  // selectType(type: string): void {
  //   this.type = type
  // }

  // @Watch('type')
  // onTypeChanged(value: string) {
  //   this.$emit('update:type', value)
  // }

}
</script>

<style lang="scss" scoped>
@import "~@/assets/style/reset.scss";
@import "~@/assets/style/helper.scss";

.types {
  display: flex;
  text-align: center;
  font-size: 24px;

  > li {
    width: 50%;
    padding-top: 12px;
    padding-bottom: 12px;
    border-bottom: 4px solid white;

    &.selected {
      border-bottom: 4px solid $color;
    }
  }
}
</style>