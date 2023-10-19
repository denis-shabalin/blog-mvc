class Model {
   constructor({ onPostsChanged }) {
      this.posts = [];
      this.isError = false;
      this.onPostsChanged = onPostsChanged;
   }

   addPost(title, description) {
      if (this._isPostValid(title)) {
         this.isError = false;

         this.posts.push({
            title,
            description,
            timestamp: Date.now()
         });
      } else {
         this.isError = true;
      }

      this.onPostsChanged(this.posts, this.isError); // при изменение данных в модели вызывается оповещение
   }

   getPosts() {
      return this.posts;
   }

   _isPostValid(title) {
      return title.length < 100;
   }
}