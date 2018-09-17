import React, { Component } from 'react';
import Post from './Post';

class ShowPosts extends Component {

    componentWillUpdate() {
    }

    render() {
        const { text } = this.props;
        const topName = [...text].sort((a, b) => a > b).map((a, index) =>
           <Post key= {index} text = {a}/> );
        return (
            <div>
                {topName}
            </div>
        )
    }
}

export default ShowPosts
