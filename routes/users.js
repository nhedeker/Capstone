'use strict';

const { camelizeKeys, decamelizeKeys } = require('humps');
const bcrypt = require('bcrypt-as-promised');
const boom = require('boom');
const ev = require('express-validation');
const express = require('express');
const knex = require('../knex');
const validations = require('../validations/users');

// eslint-disable-next-line new-cap
const router = express.Router();

// returns a user's information
router.get('/users/:username', (req, res, next) => {
  const { username } = req.params;

  knex('users')
    .where('username', username)
    .first()
    .then((row) => {
      const user = camelizeKeys(row);

      delete user.hashedPassword;

      res.send(user);
    })
    .catch((err) => {
      next(err);
    });
});

// Creates new user in users table
router.post('/users', ev(validations.post), (req, res, next) => {
  const { email, password, username } = req.body;

  knex('users')
    .select(knex.raw('1=1'))
    .where('email', email)
    .first()
    .then((exists) => {
      if (exists) {
        throw boom.create(409, 'Email has already been registered');
      }

      return knex('users')
      .select(knex.raw('1=1'))
      .where('username', username)
      .first();
    })
    .then((exists) => {
      if (exists) {
        throw boom.create(409, 'Username is taken');
      }

      return bcrypt.hash(password, 12);
    })
    .then((hashedPassword) => {
      const newUser = { email, hashedPassword, username };

      const row = decamelizeKeys(newUser);

      return knex('users').insert(row, '*');
    })
    .then((rows) => {
      const user = camelizeKeys(rows[0]);

      delete user.hashedPassword;

      res.send(user);
    })
    .catch((err) => {
      next(err);
    });
});

module.exports = router;
