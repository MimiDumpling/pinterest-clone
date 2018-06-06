// createUserInDB(json) { ...do things... }
import { createUserInDB } from 'config/db';
// createBoardFromUserInDB(user) { ...do things... }
import { createBoardFromUserInDB } from 'config/db';
import { react } from 'babel-types';

function createUser( response ) {
  const json = response.json();
  return createUserInDB(json)
};

function createBoard( user ) {
  createBoardFromUserInDB(user);
};

fetch({url: 'https://jsonplaceholder.typicode.com/posts/1'})
  .then(createUser)
  .then(createBoard)

class Post extends React.Component {
  handlePress() {
    // fetch the post
    fetch('www.pinterestclone.com/post')
      .then(response => response.json())
      .then(json => {
        this.setState({
          post: json,
        })
      })
  }

  render() {
    return (
      <div>
        {this.state.post}
        <button onPress={this.handlePress}>Get post</button>
      </div>
    );
  }
}

// json method: sets State
function changeState(json) {
  this.setState({
    post: json,
  })
};

// json method: console.log the json
function logJson(json) {
  console.log(json)
};

// base method
function base( path, jsonMethod ) {
  fetch('www.pinterestclone.com' + path)
    .then(response => response.json())
    .then(jsonMethod)
};

// helper methods
function getPost(id) {
  return base('/post/' + id, logJson)
};

function getPosts() {
  return base('/posts', logJson)
};

function getComment(id) {
  // not sure if this is supported by jsonplaceholder
  return base('/comment/' + id, logJson)
};

function getComments() {
  return base('/comments', logJson)
};

function getCommentsForPost(id) {
  return base('/comments?postId=' + id, logJson)
};

// template strings
// arrow functions

export {getPost, getPosts,}