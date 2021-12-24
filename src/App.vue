<template>
  <div id="app">
    <Container />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
// import TsxTest, { List } from '@/components/jsx/TsxTest'
import Container from './components/jsx/Container.vue'


@Component({
  components: {
    // TsxTest,
    Container
  },
})
export default class Home extends Vue {
  // list = List
}
</script>

<style lang="scss"></style>
