const BaseController = require('./BaseController.js');

class CommentsController extends BaseController {
  async getAllComments() {
    return await this.axiosInstance.get('/comments');
  }

  async getComment(id) {
    return await this.axiosInstance.get(`/comments/${id}`);
  }
}

module.exports = new CommentsController();
