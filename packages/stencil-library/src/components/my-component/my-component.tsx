import { Component, h } from '@stencil/core';

@Component({
  tag: 'my-component',
  shadow: true,
})
export class MyComponent {

  render() {
    return (
      <div>
        Hello, World!
      </div>
    );
  }
}
