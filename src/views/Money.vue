<template>
  <div>
    <Layout class-pre-fix="money">
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

      <div>
        <ul class="types">
          <li class="selected">支出</li>
          <li>收入</li>
        </ul>
      </div>

      <div>
        <label class="notes">
          <span class="name">备注</span>
          <input type="text" placeholder="点击输入备注...">
        </label>
      </div>

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
    </Layout>
  </div>
</template>

<script lang="ts">

export default {
  name: "Money",
}
</script>

<style lang="scss">
.money-content {
  display: flex;
  flex-direction: column-reverse;
}

</style>

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

.notes {
  display: block;
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