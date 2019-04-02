import { Component } from "@stencil/core";

@Component({
  tag: 'the-header',
  styleUrl: './the-header.css',
  shadow: false
})
export class TheHeader {
  render() {
    return (
      <header>
        <h1>wordmark</h1>
        <slot></slot>
      </header>
    )
  }
}
