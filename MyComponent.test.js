import { shallow } from 'vue-test-utils'
import MyComponent from './MyComponent'

describe(MyComponent, () => {
  it('renders', () => {
    const wrapper = shallow(MyComponent)
  })
})