<template>
  <Layout>
    <Types classPrefix="statistics" :type.sync="type"/>
  </Layout>
</template>

<script lang="ts">

import Types from "@/components/money/Types.vue";
import Vue from "vue";
import {Component} from "vue-property-decorator";


@Component({
  components: {Types}
})
export default class Statistics extends Vue {
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