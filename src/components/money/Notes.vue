<template>
  <div>
    <label class="notes">
      <span class="name">备注</span>
      <input type="text" placeholder="点击输入备注..." v-model="value">
    </label>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import {Component} from "vue-property-decorator";

@Component
export default class Notes extends Vue {
  value = ''
}
</script>

<style lang="scss" scoped>
@import "~@/assets/style/reset.scss";
@import "~@/assets/style/helper.scss";

.notes {
  margin-top: 32px;
  background: #f5f5f5;
  padding-left: 16px;
  display: flex;
  align-items: center;

  > .name {
    padding-right: 16px;
  }

  > input {
    height: 64px;
    flex-grow: 1;
    background: transparent;
    border: none;
  }
}
</style>