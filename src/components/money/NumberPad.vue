<template>
  <div class="numberPad">
    <div class="output">0元</div>
    <div class="buttons">
      <button>7</button>
      <button>8</button>
      <button>9</button>
      <button>
        <Icon name="today"/>
      </button>
      <button>4</button>
      <button>5</button>
      <button>6</button>
      <button>+</button>
      <button>1</button>
      <button>2</button>
      <button>3</button>
      <button>-</button>
      <button>.</button>
      <button>0</button>
      <button>
        <Icon name="back"/>
      </button>
      <button class="send">完成</button>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: "numberPad"
}
</script>

<style lang="scss" scoped>
@import "~@/assets/style/reset.scss";
@import "~@/assets/style/helper.scss";

.numberPad {
  background: rgb(255, 203, 75, 0.5);

  > .output {
    width: 50%;
    margin-left: auto;
    font-size: 32px;
    font-family: Consolas, monospace;
    padding: 9px 16px;
    text-align: right;
  }

  > .buttons {
    width: 100vw;
    display: flex;
    flex-wrap: wrap;

    > .send {
      background: rgb(255, 149, 155);
    }

    > button {
      border: 1px solid $color;
      border-radius: 12px;
      width: 80px;
      height: 56px;
      font-size: 24px;
      background: white;
      margin-top: 8px;
      margin-left: 20px;
      margin-bottom: 8px;
      box-shadow: inset 0px -4px $color;
    }
  }
}
</style>