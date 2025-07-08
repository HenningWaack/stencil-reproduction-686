import { mount } from '@vue/test-utils';
import { MyComponent } from '../lib/components';

describe('MyComponent', () => {
  it('should keep hydrated class when conditional class is applied', async () => {
    const wrapper = mount(MyComponent, {
      props: {
        show: false,
        first: 'Vue',
      },
    });

    // Stencil adds the `hydrated` class asynchronously, so we need to wait for it
    await new Promise(resolve => setTimeout(resolve, 100));

    expect(wrapper.classes()).toContain('hydrated');

    await wrapper.setProps({ show: true });

    expect(wrapper.classes()).toContain('hydrated');
    expect(wrapper.classes()).toContain('my-component--show');
  });
});
