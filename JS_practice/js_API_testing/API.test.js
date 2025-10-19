const axios = require('axios').default;

describe('Posts API testing', () => {
  const baseURL = 'https://jsonplaceholder.typicode.com';
  test('Get all posts [/posts] and verify posts number', async () => {
    const response = await axios.get(`${baseURL}/posts`);
    expect(response.status).toBe(200);
    expect(response.data).toHaveLength(100);
    response.data.forEach((post) => {
      expect(post).toHaveProperty('id');
      expect(post).toHaveProperty('userId');
      expect(post).toHaveProperty('title');
      expect(post).toHaveProperty('body');
    });
  });

  test('Get a post [/posts/id] and verify id and properties data types', async () => {
    const id = Math.ceil(Math.random() * 100);
    const response = await axios.get(`${baseURL}/posts/${id}`);
    expect(response.status).toBe(200);
    expect(response.data.id).toBe(id);
    expect(typeof response.data.id).toBe('number');
    expect(typeof response.data.userId).toBe('number');
    expect(typeof response.data.title).toBe('string');
    expect(typeof response.data.body).toBe('string');
  });

  test('Add a post [/posts] and verify response fields', async () => {
    const postData = {
      title: 'My first post',
      body: 'I like API.',
      userId: 99,
    };
    const response = await axios.post(`${baseURL}/posts`, postData, {
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });
    expect(response.status).toBe(201);
    expect(response.data.id).toBe(101);
    expect(response.data).toMatchObject(postData);
  });

  test('Update post [/posts/id] and verify response fields', async () => {
    const id = Math.ceil(Math.random() * 100);
    const postData = {
      title: 'Updated post title',
      body: 'Updated post body',
    };
    const response = await axios.put(`${baseURL}/posts/${id}`, postData, {
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });
    expect(response.status).toBe(200);
    expect(response.data.id).toBe(id);
    expect(response.data).toMatchObject(postData);
  });

  test('Delete post [/posts/id] and verify status 200', async () => {
    const id = Math.ceil(Math.random() * 100);
    const response = await axios.delete(`${baseURL}/posts/${id}`);
    expect(response.status).toBe(200);
  });
});
