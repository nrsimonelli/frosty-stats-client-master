const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();


router.get('/', (req, res) => {

    const queryString = 'SELECT * FROM "players";';
    
    pool.query(queryString)
      .then((results) => res.send(results.rows))
      .catch(error => {
        console.log('error in stat router GET:', error);
        res.sendStatus(500);
    });

});

router.post('/add', (req, res) => {  
    console.log(req.body);
    const p1 = req.body.p1;
    const p2 = req.body.p2;
    const p3 = req.body.p3;
    const p4 = req.body.p4;
    const p5 = req.body.p5;
    const p6 = req.body.p6;
    const p7 = req.body.p7;
    const p8 = req.body.p8;
    const p9 = req.body.p9;
    const p10 = req.body.p10;
    const t1score = req.body.t1score;
    const t2score = req.body.t2score;
    const tb = req.body.tb;

  
    const queryString = `'INSERT INTO "games" (t1_player1, t1_player2, t1_player3, t1_player4, t1_player5, t2_player1, t2_player2, t2_player3, t2_player4, t2_player5, t1_score, t2_score, tiebreaker) VALUES ($1, $2, $3, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13);';`

    pool.query(queryString, [p1, p2, p3, p4, p5, p6, p7, p8, p9, p10, t1score, t2score, tb])
      .then(() => res.sendStatus(201))
      .catch(error => {
        console.log('error in stat router POST:', error);
        res.sendStatus(500);
    });

});


module.exports = router;