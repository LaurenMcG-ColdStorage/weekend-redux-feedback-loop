const express = require('express');
const router = express.Router();
const pool = require('../modules/pool')


// TODO: This route adds a new feedback entry
router.post('/', (req, res) => {
    console.log('Test');
    const newFeedback = req.body;
    const queryText = `INSERT INTO "feedback" ("feeling", "understanding", "support", "comments")
                        VALUES ( $1, $2, $3, $4);`;
    pool
    .query(queryText, [newFeedback.feeling, newFeedback.understanding, newFeedback.support, newFeedback.comments])
    .then((result) => {
        res.sendStatus(201);
    })
    .catch((error) => {
        console.error(error);
        res.sendStatus(501);
    })
})


// DO NOT EDIT THIS ROUTE
// This route must return all feedback.
router.get('/', (req, res) => {
    console.log('testing')
    const sqlText = `SELECT * FROM "feedback" ORDER BY "id"`;
    pool.query(sqlText).then(result => {
        res.send(result.rows)
    }).catch(err => {
        console.log(err);
        res.sendStatus(500);
    })
})

module.exports = router;
