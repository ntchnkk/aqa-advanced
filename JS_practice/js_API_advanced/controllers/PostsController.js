const BaseController = require('./BaseController.js');

class PostsController extends BaseController {
  async getAllPosts() {
    return await this.axiosInstance.get('/posts');
  }

  async getPost(id) {
    return await this.axiosInstance.get(`/posts/${id}`);
  }

  async addPost(postData) {
    return await this.axiosInstance.post('/posts', postData);
  }

  async updatePost(id, postData) {
    return await this.axiosInstance.put(`/posts/${id}`, postData);
  }

  async deletePost(id) {
    return await this.axiosInstance.delete(`/posts/${id}`);
  }
}

module.exports = new PostsController();
