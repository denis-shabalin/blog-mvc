const model = new Model({
   onPostChanged: handleModelPostsChanged
});

model.addPost('1', '2');
model.addPost('Заголовок', 'Описание');

function handleModelPostsChanged(posts) {
   console.log(posts);
}