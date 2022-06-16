<template>
  <Layout>
    <Types classPrefix="statistics" :type.sync="type"/>
    <ol>
      <li v-for="(group,index) in result" :key="index">
        <h3>{{ group.title }}</h3>
        <ol>
          <li v-for="item in group.items" :key="item.createAt">
            {{ item.amount }} {{ item.createAt }}
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

type RecordItem = {
  choices: string,
  notes: string,
  types: string,
  amount: string,
  createAt: string | undefined,
}

type HashTableValue = {
  title: string,
  items: RecordItem[]
}

@Component({
  components: {Types}
})
export default class Statistics extends Vue {
  get recordList() {
    return this.$store.state.recordList as RecordItem[];
  }

  get result() {
    const {recordList} = this;
    const hashTable: { [key: string]: HashTableValue } = {};
    for (let i = 0; i < recordList.length; i++) {
      const [date, time] = recordList[i].createAt!.split('T');
      console.log(date);
      hashTable[date] = hashTable[date] || {title: date, items: []};
      hashTable[date].items.push(recordList[i])
    }
    console.log(hashTable);
    return hashTable
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

</style>