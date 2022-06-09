<template>
  <div class="numberPad">
    <div class="output">{{ output }}</div>
    <div class="buttons">
      <button @click="InputNumber">7</button>
      <button @click="InputNumber">8</button>
      <button @click="InputNumber">9</button>
      <button @click="Time">
        <Icon name="today"/>
      </button>
      <button @click="InputNumber">4</button>
      <button @click="InputNumber">5</button>
      <button @click="InputNumber">6</button>
      <button @click="Remove">清除</button>
      <button @click="InputNumber">1</button>
      <button @click="InputNumber">2</button>
      <button @click="InputNumber">3</button>
      <button @click="Computer">计算器</button>
      <button @click="InputNumber">.</button>
      <button @click="InputNumber">0</button>
      <button @click="Back">
        <Icon name="back"/>
      </button>
      <button class="send" @click="send">完成</button>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import {Component} from "vue-property-decorator";

@Component
export default class NumberPad extends Vue {
  output = '￥0';

  InputNumber(event: PointerEvent) {
    const button = event.target as HTMLButtonElement;
    if (this.output.length === 19) {
      return
    }
    if (this.output === '￥0') {
      if (button.innerText === '.') {
        this.output += '.'
      } else {
        this.output = '￥' + button.innerText
      }
      return
    }
    if (this.output.indexOf('.') >= 0 && button.innerText === '.') {
      return
    } else {
      this.output += button.innerText
    }

  }

  Time() {
    const time = new Date();
    window.alert(time.toLocaleDateString());
  }

  Remove() {
    this.output = '￥0'
  }

  Back() {
    if (this.output.length === 2) {
      this.output = '￥0'
    } else {
      this.output = this.output.slice(0, -1)
    }
  }

  Computer() {
    window.open('https://zaixianjisuanqi.bmcx.com/')
  }

  send() {
    this.$emit('update:amount', this.output);
    this.$emit('submit', this.output);
    this.output = '￥0'
  }

}
</script>

<style lang="scss" scoped>
@import "~@/assets/style/reset.scss";
@import "~@/assets/style/helper.scss";

.numberPad {
  background: rgb(255, 203, 75, 0.5);

  > .output {
    width: 100%;
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
    margin-right: auto;
    margin-left: auto;
    justify-content: space-between;

    > .send {
      background: rgb(255, 149, 155);
    }

    > button {
      border: 1px solid $color;
      border-radius: 12px;
      width: 21vw;
      height: 6.5vh;
      font-size: 24px;
      background: white;
      margin-top: 8px;
      margin-bottom: 8px;
      box-shadow: inset 0px -4px $color;
    }
  }
}
</style>