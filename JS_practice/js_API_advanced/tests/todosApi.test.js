const TodosController = require('../controllers/TodosController.js');
const { genTodoId } = require('../testData.js');

describe('Todos API testing with controllers', () => {
  test('Get all todos [/todos] and verify comments number', async () => {
    const response = await TodosController.getAllTodos();
    expect(response.status).toBe(200);
    expect(response.data).toHaveLength(200);
    response.data.forEach((todo) => {
      expect(todo).toHaveProperty('userId');
      expect(todo).toHaveProperty('id');
      expect(todo).toHaveProperty('title');
      expect(todo).toHaveProperty('completed');
    });
  });

  test('Get a todo [/todos/id] and verify properties', async () => {
    const id = genTodoId();
    const response = await TodosController.getTodo(id);
    expect(response.status).toBe(200);
    expect(response.data.id).toBe(id);
    expect(typeof response.data.userId).toBe('number');
    expect(typeof response.data.id).toBe('number');
    expect(typeof response.data.title).toBe('string');
    expect(typeof response.data.completed).toBe('boolean');
  });
});
