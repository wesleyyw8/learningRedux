import React from 'react';
import Photo from './Photo';
import Comments from './Comments';

const Single = React.createClass({
  render() {
    const i = this.props.posts.findIndex((post) => post.code === this.props.params.postId);
    const post = this.props.posts[i];
    console.log(post);
    return (
      <div>
        <h1>
          <div className="single-photo">
            <Photo i={i} post={post} {...this.props}> </Photo>
            <Comments></Comments>
          </div>
        </h1>
      </div>
    )
  }
});

export default Single;