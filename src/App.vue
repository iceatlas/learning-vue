<template>
  <div id="app">
    <TsxTest />
    <div v-for="(item, index) in list" :key="index">
      <component :is="item"/>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import TsxTest, { List } from '@/components/TsxTest'

@Component({
  components: {
    TsxTest,
  },
})
export default class Home extends Vue {
  list = List
}
</script>

<style lang="scss"></style>
