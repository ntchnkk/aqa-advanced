const PostsController = require('../controllers/PostsController.js');
const { genPostId, genPostData, genUpdatedPostData } = require('../testData.js');

describe('Posts API testing with controllers', () => {
  describe('Posts API - positive tests', () => {
    test('Get all posts [/posts] and verify posts number', async () => {
      const response = await PostsController.getAllPosts();
      expect(response.status).toBe(200);
      expect(response.data).toHaveLength(100);
      response.data.forEach((post) => {
        expect(post).toHaveProperty('id');
        expect(post).toHaveProperty('userId');
        expect(post).toHaveProperty('title');
        expect(post).toHaveProperty('body');
      });
    });

    test('Get a post [/posts/id] and verify properties', async () => {
      const id = genPostId();
      const response = await PostsController.getPost(id);
      expect(response.status).toBe(200);
      expect(response.data.id).toBe(id);
      expect(typeof response.data.userId).toBe('number');
      expect(typeof response.data.title).toBe('string');
      expect(typeof response.data.body).toBe('string');
    });

    test('Add a post [/posts] and verify response', async () => {
      const postData = genPostData();
      const response = await PostsController.addPost(postData);
      expect(response.status).toBe(201);
      expect(response.data).toMatchObject(postData);
      expect(response.data.id).toBeDefined();
    });

    test('Update post [/posts/id] and verify response', async () => {
      const id = genPostId();
      const postData = genUpdatedPostData();
      const response = await PostsController.updatePost(id, postData);
      expect(response.status).toBe(200);
      expect(response.data.id).toBe(id);
      expect(response.data).toMatchObject(postData);
    });

    test('Delete post [/posts/id] and verify status', async () => {
      let id = genPostId();
      const response = await PostsController.deletePost(id);
      expect(response.status).toBe(200);
    });
  });

  describe('Posts API - negative tests', () => {
    test('Get non-existing post returns 404', async () => {
      const response = await PostsController.getPost(99999);
      expect(response.status).toBe(404);
      expect(response.data).toEqual({});
    });

    test('Get post with invalid id type returns 404', async () => {
      const response = await PostsController.getPost('id');
      expect(response.status).toBe(404);
      expect(response.data).toEqual({});
    });
  });
});
