import React, { PureComponent } from 'react'
import Like from './Like';
// By Using component, each time a new char add to input the all 
// components will be re-rendered. if it was [a], next time it is [a,b] and a and b 
// component will be shown
// By Usign Pure component when a typed next time b is added instead of showing 
// a and b in console, it just show the new props b, because the shouldComponentUpdate
// in Pure component will check the props and it knows that a is a prev props.
export default class Post extends PureComponent {
  render() {
    console.log("post ", this.props.text);
    return (
        <span> <li>{this.props.text}<Like /></li></span>
    )
  }
}
