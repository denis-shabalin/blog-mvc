class Controller {
   constructor() {
      this.model = new Model({ //создание Модели
         onPostsChanged: this.handleModelPostsChanged
      });
      
      this.view = new View({ //создание View
         onNewPost: this.handleViewNewPost
      });
   }

   handleModelPostsChanged = (posts) => { // вызов метода как только в модели меняются посты(реакция на изменнения)
      this.view.renderPosts(posts); //внутри отображения вызвать render post
   }

   handleViewNewPost = (title, desciption) => { // обработка нового поста в отображение
      this.model.addPost(title, desciption); // в Model нужно добавить новый пост(обновление модели)
   }
}

