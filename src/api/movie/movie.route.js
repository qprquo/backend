'use strict';

const { Router } = require('express');
const controller = require('./movie.controller');
const { authorize } = require('../user/user.middleware');
const validate = require('../../core/middleware/validate');
const reviewValidator = require('../review/review.validator');

const router = new Router();

module.exports = (app) => {
  app.use('/movies', router);

  router
    .param('movieId', controller.checkMovie);

  router
    .route('/:movieId')
    .get(controller.get)

  router
    .route('/:movieId/likes')
    .get(controller.likes.get)
    .post(authorize, controller.likes.create)
    .delete(authorize, controller.likes.delete);

  router
    .route('/:movieId/reviews')
    .get(controller.reviews.list)
    .post(authorize, validate(reviewValidator.create), controller.reviews.create);

  router
    .route('/popular')
    .get(controller.popular);

  router
    .route('/top_rated')
    .get(controller.topRated);

  router
    .route('/upcoming')
    .get(controller.upcoming);
};
