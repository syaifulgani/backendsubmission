/* eslint-disable linebreak-style */
const {
  addBookHandler,
  getAllBooksHandler,
  getDetailBookHandler,
  editIdBookHandler,
  deleteBookByGHandler,

} = require('./handler');

const routes = [
  {
    method: 'POST',
    path: '/books',
    handler: addBookHandler,
  },
  {
    method: 'GET',
    path: '/books',
    handler: getAllBooksHandler,
  },
  {
    method: 'GET',
    path: '/books/{bookId}',
    handler: getDetailBookHandler,
  },
  {
    method: 'PUT',
    path: '/books/{bookId}',
    handler: editIdBookHandler,
  },
  {
    method: 'DELETE',
    path: '/books/{bookId}',
    handler: deleteBookByGHandler,
  },

];
module.exports = routes;
