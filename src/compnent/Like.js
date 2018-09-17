import React, { Component } from 'react'

class Like extends Component {
    constructor() {
        super();
        this.state = {
            like: 0
        }
    }
    onClickHandler = () => {
        this.setState({ like: this.state.like + 1 })
    }
    render() {
        console.log("like", this.state.like)
        return (
            <button onClick={this.onClickHandler}>
                {this.state.like}
            </button>
        )
    }
}

export default Like
