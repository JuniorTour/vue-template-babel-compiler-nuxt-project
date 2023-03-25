import { mount } from '@vue/test-utils'
import Tutorial from '../components/Tutorial.vue'

describe('jest test with vue-template-babel-compiler', () => {
  test('should work for Optional Chaining', () => {
    const wrapper = mount(Tutorial)
    expect(wrapper.vm).toBeTruthy()
    expect(wrapper.vm.$el.innerHTML).toMatch('Optional Chaining enabled: true')
    expect(wrapper.vm.$el.innerHTML).toMatch('Nullish Coalescing enabled')
  })
})
