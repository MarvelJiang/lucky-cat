<template>
  <div>
    <Layout>
      <div class="choices">
        <div class="inner">
          <div v-for="item in globalChoice" :key="item">
            <Icon :name="`${item.id}`"/>
            <span>{{ item.name }}</span>
          </div>
        </div>
      </div>
    </Layout>
  </div>
</template>

<script lang="ts">

import Vue from 'vue';
import {Component} from "vue-property-decorator";

@Component
export default class labels extends Vue {
  globalChoice = [{id: 'eat', name: '餐饮'}, {id: 'clothes', name: '服饰'}, {id: 'house', name: '住房'}, {
    id: 'bus',
    name: '交通'
  }, {id: 'life', name: '日用'}, {id: 'vegetable', name: '蔬菜'}, {id: 'fruit', name: '水果'}, {
    id: 'food',
    name: '零食'
  }, {id: 'sport', name: '运动'}, {id: 'fun', name: '娱乐'}, {id: 'call', name: '通讯'}, {
    id: 'beauty',
    name: '美容'
  }, {id: 'family', name: '家庭'}, {id: 'friend', name: '社交'}, {id: 'travel', name: '旅行'}, {
    id: 'smoke',
    name: '烟酒'
  }, {id: 'camera', name: '数码'}, {id: 'cars', name: '汽车'}, {id: 'hospital', name: '医疗'}, {
    id: 'book',
    name: '书籍'
  }, {id: 'study', name: '学习'}, {id: 'cat', name: '宠物'}, {id: 'lijin', name: '礼金'}, {
    id: 'gift',
    name: '礼品'
  }, {id: 'computer', name: '办公'}, {id: 'repair', name: '维修'}, {id: 'help', name: '捐赠'}, {
    id: 'money',
    name: '彩票'
  }, {id: 'redbag', name: '红包'}, {id: 'kuaidi', name: '快递'}, {id: 'out', name: '还款'}, {
    id: 'drink',
    name: '饮品'
  }, {id: 'star', name: '追星'}, {id: 'in', name: '入账'}, {id: 'others', name: '其他'}]
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