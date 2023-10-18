class View {
   constructor({ onNewPost }) {
      this.postsNode = document.querySelector('#posts')
      this.titleInputNode = document.querySelector('#title-input');
      this.descriptionInputNode = document.querySelector('#description-input');
      this.btnNode = document.querySelector('#add-post-btn');
         
      this.onNewPost = onNewPost;

      this.btnNode.addEventListener('click', this.handleBtnClick)
   }

   renderPosts(posts) {
      this.postsNode.innerHTML = '';

      posts.forEach(post => {
         this.postsNode.innerHTML += `
         <div>
            <p>${post.title}</p>
            <p>${post.description}</p>
         </div>
         `; 
      });
   }

   handleBtnClick = () => {
      const title = this.titleInputNode.value;
      const desciption = this.descriptionInputNode.value;

      this.onNewPost(title, desciption); //оповещение о добавление нового поста
   }
}