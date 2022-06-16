<template>
  <div>
    <ul class="types">
      <li :class="{selected:type === '支出',
      [classPrefix+'-item']:classPrefix}"
          @click="selectType('支出')">支出
      </li>
      <li :class="{selected:type === '收入',
      [classPrefix+'-item']:classPrefix}"
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
  @Prop() classPrefix?: string;

  selectType(type: string) {
    this.$emit('update:type', type)
  }
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
    border-bottom: 4px solid transparent;

    &.selected {
      border-bottom: 4px solid $color;
    }
  }
}
</style>