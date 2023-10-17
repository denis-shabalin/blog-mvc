const model = new Model({
   onPostChanged: handleModelPostsChanged
});

const view = new View();

view.renderPosts(model.getPosts());

function handleModelPostsChanged(posts) {
   console.log(posts);
}