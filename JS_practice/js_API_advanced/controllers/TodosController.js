const BaseController = require('./BaseController.js');

class TodosController extends BaseController {
  async getAllTodos() {
    return await this.axiosInstance.get('/todos');
  }

  async getTodo(id) {
    return await this.axiosInstance.get(`/todos/${id}`);
  }
}

module.exports = new TodosController();
