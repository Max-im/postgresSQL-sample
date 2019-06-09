const { Router } = require("express");
const client = require("../db");

const router = Router();

// get all habitats
router.get("/", (req, res, next) => {
  console.log("habitats");
  client
    .query("SELECT * FROM habitats ORDER by id")
    .then(({ rows }) => res.json(rows))
    .catch(err => next(err));
});

// create new habitat
router.post("/", (req, res, next) => {
  const { name, climate, temperature } = req.body;
  client
    .query(
      "INSERT INTO habitats (name, climate, temperature) VALUES($1, $2, $3)",
      [name, climate, temperature]
    )
    .then(() => res.redirect("/habitats"))
    .catch(err => next(err));
});

module.exports = router;
