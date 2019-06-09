const { Router } = require("express");
const client = require("../db");

const router = Router();
/**
 * get all lives
 */
router.get("/", (req, res, next) => {
  client
    .query("SELECT * FROM lives")
    .then(({ rows }) => res.json(rows))
    .catch(err => next(err));
});

/**
 * get conditions
 */
router.get("/conditions", (req, res, next) => {
  client
    .query("SELECT * FROM lives JOIN habitats ON habitats.name = lives.habitat")
    .then(({ rows }) => res.json(rows))
    .catch(err => next(err));
});

module.exports = router;
