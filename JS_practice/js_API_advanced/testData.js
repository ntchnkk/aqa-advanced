const { faker } = require('@faker-js/faker');

function genPostId() {
  return Math.ceil(Math.random() * 100);
}

function genCommentId() {
  return Math.ceil(Math.random() * 500);
}

function genTodoId() {
  return Math.ceil(Math.random() * 200);
}

function genPostData() {
  return {
    title: faker.lorem.sentence(),
    body: faker.lorem.paragraph(),
    userId: faker.number.int({ min: 1, max: 10 }),
  };
}

function genUpdatedPostData() {
  return {
    title: faker.lorem.sentence(),
    body: faker.lorem.paragraph(),
  };
}

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

module.exports = {
  genPostId,
  genPostData,
  genUpdatedPostData,
  genCommentId,
  emailRegex,
  genTodoId,
};
