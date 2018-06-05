function createUser( userName ) {
  console.log(userName);
};

function createBoard( boardTitle ) {
  console.log(boardTitle);
};

function createPost( postTitle ) {
  console.log(postTitle)
};

fetch('https://jsonplaceholder.typicode.com/posts/1')
  .then(createUser(userName))