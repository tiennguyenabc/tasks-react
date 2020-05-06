import React, { Component } from 'react';
class ConditionalRendering extends Component {
  render() {
    const { item } = this.props;
    let className = 'ConditionalRendering';
    return(
      <div className={className}>
         <ol type={this.props.type} start={this.props.start}>
      <li>Item 1</li>
      <li>Item 2</li>
      <li>Item 3</li>
    </ol>
      </div>
    )
  }
}
export default ConditionalRendering;