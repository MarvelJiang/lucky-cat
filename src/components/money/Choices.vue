<template>
  <div class="choices">
    <div class="selected">
      <Icon name="eat"/>
      <span>餐饮</span>
    </div>
    <div>
      <Icon name="clothes"/>
      <span>服饰</span>
    </div>
    <div>
      <Icon name="house"/>
      <span>房租</span>
    </div>
    <div>
      <Icon name="bus"/>
      <span>交通</span>
    </div>
    <div>
      <Icon name="add"/>
      <span>添加</span>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: "choices"
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
  padding-top: 16px;
  overflow: auto;

  > div {
    border: 2px solid $color;
    margin-left: 24px;
    margin-top: 8px;
    padding: 8px;
    height: 72px;
    width: 72px;
    border-radius: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    opacity: 0.7;

    &.selected {
      border: 2px solid rgb(235, 101, 126);
      opacity: 1;
    }
  }
}
</style>