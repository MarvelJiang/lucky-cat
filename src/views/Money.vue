<template>
  <div>
    <Layout class-pre-fix="money">
      <number-pad @update:amount="onUpdateAmount" @submit="saveRecord"/>
      <types :type="record.types" @update:type="onUpdateType"/>
      <notes @update:note="onUpdateNote"/>
      <choices :data-source="choices" @update:choice="onUpdateChoice"/>
    </Layout>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Choices from "@/components/money/Choices.vue";
import Notes from "@/components/money/Notes.vue";
import Types from "@/components/money/Types.vue";
import NumberPad from "@/components/money/NumberPad.vue";
import {Component, Watch} from "vue-property-decorator";
import {model} from "@/model";

type RecordItem = {
  choices: string,
  notes: string,
  types: string,
  amount: string,
  createAt: Date | undefined,
}

@Component({
  components: {NumberPad, Types, Notes, Choices},
})
export default class Money extends Vue {
  choices = [{id: 'eat', name: '餐饮'}, {id: 'clothes', name: '服饰'}, {id: 'house', name: '住房'}, {id: 'bus', name: '交通'}];
  record: RecordItem = {choices: '', notes: '', types: '支出', amount: '￥0', createAt: undefined};
  recordList: RecordItem[] = model.fetch();

  onUpdateChoice(value: string) {
    this.record.choices = value
  }

  onUpdateNote(value: string) {
    this.record.notes = value
  }

  onUpdateType(value: string) {
    this.record.types = value
  }

  onUpdateAmount(value: string) {
    this.record.amount = value
  }

  saveRecord() {
    const record2: RecordItem = model.clone(this.record);
    record2.createAt = new Date();
    this.recordList.push(record2);
  }

  @Watch('recordList')
  onRecordListChanged() {
    model.save(this.recordList)
  }
}

</script>

<style lang="scss">
.money-content {
  display: flex;
  flex-direction: column-reverse;
}

</style>