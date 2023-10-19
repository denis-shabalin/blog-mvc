class Controller {
   constructor() {
      this.model = new Model({ //создание Модели
         onPostsChanged: this.handleModelPostsChanged
      });
      
      this.view = new View({ //создание View
         onNewPost: this.handleViewNewPost
      });

      this.api = new API();
   }

   init() {
      this.api.fetchPosts()
         .then(posts => {
            this.model.setPosts(posts);
         })
   }

   handleModelPostsChanged = (posts, isError) => { // вызов метода как только в модели меняются посты(реакция на изменнения)
      this.view.render(posts, isError); //внутри отображения вызвать render post
   }

   handleViewNewPost = (title, body) => { // обработка нового поста в отображение
      this.model.addPost(title, body); // в Model нужно добавить новый пост(обновление модели)
   }
}

