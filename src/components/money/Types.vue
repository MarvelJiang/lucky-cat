<template>
  <div>
    <ul class="types">
      <li class="selected">支出</li>
      <li>收入</li>
    </ul>
  </div>
</template>

<script lang="ts">
export default {
  name: "types"
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
    border-bottom: 4px $color;

    &.selected {
      border-bottom: 4px solid $color;
    }
  }
}
</style>