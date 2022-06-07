<template>
  <div>
    <Layout>
      <div>
        <ul class="choices">
          <li>衣服</li>
          <li>餐饮</li>
          <li>房租</li>
          <li>交通</li>
        </ul>
        <div class="new">
          <button>新增标签</button>
        </div>
      </div>

      <div>
        <label class="notes">
          <span class="name">备注</span>
          <input type="text">
        </label>
      </div>

      <div>
        <ul class="types">
          <li class="selected">支出</li>
          <li>收入</li>
        </ul>
      </div>

      <div class="numberPad">
        <div class="output">￥0</div>
        <div class="buttons">
          <button>7</button>
          <button>8</button>
          <button>9</button>
          <button>今天</button>
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
          <button>←</button>
          <button>完成</button>
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

<style lang="scss" scoped>

</style>