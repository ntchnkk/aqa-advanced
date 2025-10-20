const CommentsController = require('../controllers/CommentsController.js');
const { genCommentId, emailRegex } = require('../testData.js');

describe('Comments API testing with controllers', () => {
  test('Get all comments [/comments] and verify comments number', async () => {
    const response = await CommentsController.getAllComments();
    expect(response.status).toBe(200);
    expect(response.data).toHaveLength(500);
    response.data.forEach((comment) => {
      expect(comment).toHaveProperty('postId');
      expect(comment).toHaveProperty('id');
      expect(comment).toHaveProperty('name');
      expect(comment).toHaveProperty('email');
      expect(comment).toHaveProperty('body');
    });
  });

  test('Get a comments [/comments/id] and verify properties', async () => {
    const id = genCommentId();
    const response = await CommentsController.getComment(id);
    expect(response.status).toBe(200);
    expect(response.data.id).toBe(id);
    expect(typeof response.data.postId).toBe('number');
    expect(typeof response.data.id).toBe('number');
    expect(typeof response.data.name).toBe('string');
    expect(response.data.email).toMatch(emailRegex);
    expect(typeof response.data.body).toBe('string');
  });
});
