class Controller {
   constructor() {
      this.model = new Model({ //создание Модели
         onPostsChanged: this.handleModelPostsChanged
      });
      
      this.view = new View({ //создание View
         onNewPost: this.handleViewNewPost
      });
   }

   handleModelPostsChanged = (posts, isError) => { // вызов метода как только в модели меняются посты(реакция на изменнения)
      this.view.render(posts, isError); //внутри отображения вызвать render post
   }

   handleViewNewPost = (title, description) => { // обработка нового поста в отображение
      this.model.addPost(title, description); // в Model нужно добавить новый пост(обновление модели)
   }
}

