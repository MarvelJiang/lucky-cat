<template>
  <div>
    <Layout class-pre-fix="money">
      <number-pad/>
      <types/>
      <notes/>
      <choices :data-source="choices"/>
    </Layout>
  </div>
</template>

<script>

import Choices from "@/components/money/Choices.vue";
import Notes from "@/components/money/Notes.vue";
import Types from "@/components/money/Types.vue";
import NumberPad from "@/components/money/NumberPad.vue";

export default {
  name: "Money",
  components: {NumberPad, Types, Notes, Choices},
  data() {
    return {
      choices: {"eat": "餐饮", "clothes": "服饰", "house": "房租", "bus": "交通"}
    }
  }
}
</script>

<style lang="scss">
.money-content {
  display: flex;
  flex-direction: column-reverse;
}

</style>