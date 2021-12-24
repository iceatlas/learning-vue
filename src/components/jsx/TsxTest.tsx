import { Component, Vue } from 'vue-property-decorator'

Vue.component('anchored-heading', {
  render: function (createElement) {
    return createElement(
      'h' + this.level, // 标签名称
      this.$slots.default // 子节点数组
    )
  },
  props: {
    level: {
      type: Number,
      required: true,
    },
  },
})

Vue.component('anchored-jsx-heading', {
  render() {
    const Cmp = `h${this.level}`
    return <Cmp>{this.$slots.default}</Cmp>
  },
  props: {
    level: {
      type: Number,
      required: true,
    },
  },
})

@Component({})
export default class Test extends Vue {
  render() {
    return (
      <div>
        <anchored-heading level={1}>Hello world!</anchored-heading>
        <anchored-jsx-heading level={2}>Hello world!111</anchored-jsx-heading>
      </div>
    )
  }
}

export const List = [
  {
    render() {
      return <p>1</p>
    },
  },
  {
    render() {
      return <p>2</p>
    },
  },
]
