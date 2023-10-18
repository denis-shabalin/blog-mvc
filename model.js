class Model {
   constructor({ onPostsChanged }) {
      this.posts = [];
      this.onPostsChanged = onPostsChanged;
   }

   addPost(title, description) {
      this.posts.push({
         title,
         description
      });

      this.onPostsChanged(this.posts); // при изменение данных в модели вызывается оповещение
   }  

   getPosts() {
      return this.posts;
   }
}