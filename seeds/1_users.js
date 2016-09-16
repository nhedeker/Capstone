/* eslint-disable camelcase, max-len */

'use strict';

exports.seed = function(knex) {
  return knex('users').del()
    .then(() => knex('users').insert([
      {
        id: 1,
        email: 'natasha.hedeker@gmail.com',
        hashed_password: '$2a$12$8rlkZt5dATAiE9VHdSJLBOPqlnVInw07qU5JBNxKYCU9LKFh20S2C',
        first_name: 'Natasha',
        last_name: 'Hedeker',
        bio: 'Nerd extraordinaire who also loves trying new recipes!',
        username: 'DelightedDragon',
        profile_img: 'http://www.pil-group.com/uploads/contacts/normal/noimage1.png',
        created_at: new Date('2016-07-26 14:26:16 UTC'),
        updated_at: new Date('2016-07-26 14:26:16 UTC')
      },
      {
        id: 2,
        email: 'stanley@paddles.net',
        hashed_password: '$2a$12$MBR6m9.4n0GmDLmJwN.F.ONqelMbniGUw7stSgsihLWg5yOCFiIVe',
        first_name: 'Stanley',
        last_name: '',
        bio: 'I\'m a puppy who wants to become a great chef!',
        username: 'StanleyPaddles',
        profile_img: 'http://www.pil-group.com/uploads/contacts/normal/noimage1.png',
        created_at: new Date('2016-07-26 14:26:16 UTC'),
        updated_at: new Date('2016-07-26 14:26:16 UTC')
      },
      {
        id: 3,
        email: 'ken@math.net',
        hashed_password: '$2a$12$7vhDp4Xu2e9P.MyVslyKdOPiAGHtE8hPwvxiCZi2PPTYo5kCYhQlW',
        first_name: 'Ken',
        last_name: 'McGrady',
        bio: 'Math and coding genius who loves to cook',
        username: 'MathIsFun',
        profile_img: 'http://www.pil-group.com/uploads/contacts/normal/noimage1.png',
        created_at: new Date('2016-07-26 14:26:16 UTC'),
        updated_at: new Date('2016-07-26 14:26:16 UTC')
      }
    ])
  )
  .then(() => {
    return knex.raw(
      "SELECT setval('users_id_seq', (SELECT MAX(id) FROM users));"
    );
  });
};