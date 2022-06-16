<template>
  <Layout>
    <Types classPrefix="statistics" :type.sync="type"/>
    <ol>
      <li v-for="(group,index) in groupList" :key="index">
        <h3 class="title">{{ beautify(group.title) }} <span class="total">￥{{ group.total }}</span></h3>
        <ol>
          <li v-for="item in group.items" :key="item.createAt" class="record">
            <span class="tag">{{ getTag(item.choices) || '无' }}</span>
            <span class="note">{{ item.notes }}</span>
            <span>￥{{ item.amount }}</span>
          </li>
        </ol>
      </li>
    </ol>
  </Layout>
</template>

<script lang="ts">


import Types from "@/components/money/Types.vue";
import Vue from "vue";
import {Component} from "vue-property-decorator";
import dayjs from "dayjs";
import clone from "@/lib/clone";

type RecordItem = {
  choices: string,
  notes: string,
  types: string,
  amount: number,
  createAt: string | undefined,
}

type Result = { title: string, total?: number, items: RecordItem[] }[]

@Component({
  components: {Types}
})
export default class Statistics extends Vue {
  globalChoice2 = [{id: 'eat', name: '餐饮'}, {id: 'clothes', name: '服饰'}, {id: 'house', name: '住房'}, {
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
  }, {id: 'star', name: '追星'}, {id: 'others', name: '其他'}, {id: 'in', name: '入账'}];

  get recordList() {
    return this.$store.state.recordList as RecordItem[];
  }

  get groupList() {
    const {recordList} = this;
    const newList = clone(recordList).filter(r => r.types === this.type).sort((a, b) => dayjs(b.createAt).valueOf() - dayjs(a.createAt).valueOf());
    if (newList.length === 0) {
      return []
    }
    const result: Result = [{title: dayjs(newList[0].createAt).format('YYYY-MM-DD'), items: [newList[0]]}];
    for (let i = 1; i < newList.length; i++) {
      const current = newList[i];
      const last = result[result.length - 1];
      if (dayjs(last.title).isSame(dayjs(current.createAt), 'day')) {
        last.items.push(current)
      } else {
        result.push({title: dayjs(newList[i].createAt).format('YYYY-MM-DD'), items: [current]})
      }
    }
    result.map(group => {
      group.total = group.items.reduce((sum, item) => {
        console.log(sum);
        console.log(item);
        return sum + item.amount;
      }, 0);
    });
    return result
  }

  getTag(choices: string) {
    const {globalChoice2} = this;
    for (let i = 0; i < globalChoice2.length; i++) {
      if (choices === globalChoice2[i].id) {
        return globalChoice2[i].name
      }
    }
  }

  beautify(value: string) {
    const now = dayjs();
    const day = dayjs(value);
    if (dayjs(value).isSame(now, 'day')) {
      value = day.format('YYYY年MM月DD日');
      return value + '(今天)';
    } else if (dayjs(value).isSame(now.subtract(1, "day"), 'day')) {
      value = day.format('YYYY年MM月DD日');
      return value + '(昨天)';
    } else {
      value = day.format('YYYY年MM月DD日');
      return value
    }
  }

  beforeCreate() {
    this.$store.commit('fetchRecordList');
  }

  type = '支出'
}
</script>

<style lang="scss" scoped>
@import "~@/assets/style/reset.scss";
@import "~@/assets/style/helper.scss";

::v-deep .statistics-item {
  background: rgb(255, 203, 75, 0.5);

  &.selected {
    border-bottom: 4px solid $color;
  }
}


.title {
  background: rgb(255, 203, 75, 0.5);
  font-size: 24px;
  padding-left: 8px;
}

.record {
  font-size: 20px;
  border-bottom: 1px solid $color;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.1);
  padding: 8px;
  display: flex;
  justify-content: space-between;
}

.tag {
  margin-right: 8px;
  white-space: nowrap;
}

.note {
  opacity: .7;
  margin-right: auto;
  overflow-x: auto;
}

h3 {
  display: flex;
  justify-content: space-between;

  .total {
    margin-right: 8px;
  }
}
</style>