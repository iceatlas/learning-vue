<template>
  <div id="app">
    <TsxTest />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import TsxTest from '@/components/TsxTest'

@Component({
  components: {
    TsxTest,
  },
})
export default class Home extends Vue {}
</script>

<style lang="scss"></style>
