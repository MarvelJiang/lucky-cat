<template>
  <div>
    <Layout class-pre-fix="money">
      <number-pad :tag="record.choices" @update:amount="onUpdateAmount" @submit="saveRecord"/>
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
import {Component, Prop, Watch} from "vue-property-decorator";


type RecordItem = {
  choices: string,
  notes: string,
  types: string,
  amount: number,
  createAt: string | undefined,
}

@Component({
  components: {NumberPad, Types, Notes, Choices},
  computed: {
    recordList() {
      return this.$store.state.recordList
    },
    choices() {
      return this.$store.state.myChoices
    },
    newRecord() {
      return this.$store.state.newRecord
    }
  }
})
export default class Money extends Vue {

  record: RecordItem = {choices: '', notes: '', types: '支出', amount: 0, createAt: undefined};

  created() {
    this.$store.commit('fetchRecordList');
    this.$store.commit('fetchMyChoices')
  }

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
    this.record.amount = parseFloat(value)
  }

  saveRecord() {
    this.$store.commit('saveRecord', this.record);
  }

  @Watch('recordList')
  onRecordListChanged() {
    this.$store.commit('saveRecordList')
  }
}

</script>

<style lang="scss">
.money-content {
  display: flex;
  flex-direction: column-reverse;
}

</style>