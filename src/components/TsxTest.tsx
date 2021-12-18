import { Component, Vue } from 'vue-property-decorator'

@Component({})
export default class Test extends Vue {
  render() {
    return <div>tsx测试</div>
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
