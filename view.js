class View {
   constructor({ onNewPost }) {
      this.postsNode = document.querySelector('#posts')
      this.titleInputNode = document.querySelector('#title-input');
      this.descriptionInputNode = document.querySelector('#description-input');
      this.btnNode = document.querySelector('#add-post-btn');
      this.errorNode = document.querySelector('#error');
         
      this.onNewPost = onNewPost;

      this.btnNode.addEventListener('click', this._handleBtnClick)
   }

   render(posts, isError) {
      this._clearView(); 

      if (isError) {
         this.errorNode.innerText = 'Ошибка ввода';
      }

      posts.forEach(post => {
         this.postsNode.innerHTML += `
         <div>
            <p>${this._buildDateString(post.timestamp)}</p>
            <p>${post.title}</p>
            <p>${post.description}</p>
         </div>
         `; 
      });
   }

   _handleBtnClick = () => {
      const title = this.titleInputNode.value;
      const description = this.descriptionInputNode.value;

      this.onNewPost(title, description); //оповещение о добавление нового поста
   }

   _buildDateString(timestamp) {
      const date = new Date(timestamp);

      return `${date.getDate()}.${date.getMonth() + 1}.${date.getFullYear()} ${date.getHours()}:${date.getMinutes()} `;
   }

   _clearView() {
      this.postsNode.innerHTML = '';
      this.errorNode.innerText = '';
   }
}