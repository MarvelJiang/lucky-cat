<template>
  <div>
    <Layout class-pre-fix="money">
      <number-pad @update:amount="onUpdateAmount"/>
      <types @update:type="onUpdateType"/>
      <notes @update:note="onUpdateNote"/>
      <choices :data-source="choices" @update:choice="onUpdateChoice"/>
      {{ record }}
    </Layout>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Choices from "@/components/money/Choices.vue";
import Notes from "@/components/money/Notes.vue";
import Types from "@/components/money/Types.vue";
import NumberPad from "@/components/money/NumberPad.vue";
import {Component} from "vue-property-decorator";

type Record = {
  choices: string,
  notes: string,
  types: string,
  amount: string
}

@Component({
  components: {NumberPad, Types, Notes, Choices},
})
export default class Money extends Vue {
  choices = {"eat": "餐饮", "clothes": "服饰", "house": "房租", "bus": "交通"};
  record: Record = {choices: '', notes: '', types: '支出', amount: '￥0'};

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
}

</script>

<style lang="scss">
.money-content {
  display: flex;
  flex-direction: column-reverse;
}

</style>