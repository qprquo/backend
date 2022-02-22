'use strict';

const Genre = require('./genre.model');

module.exports.get = (id) => {
  return Genre.query().findById(id);
};

module.exports.list = () => {
  return Genre.query();
};
