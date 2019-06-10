const { Router } = require("express");
const client = require("../db");

const router = Router();

// get all monsters
router.get("/", (req, res, next) => {
  client
    .query("SELECT * FROM monsters ORDER BY id")
    .then(({ rows }) => res.json(rows))
    .catch(err => next(err));
});

// get single monster by id
router.get("/:id", (req, res, next) => {
  client
    .query("SELECT * FROM monsters WHERE id = $1", [req.params.id])
    .then(({ rows }) => res.json(rows))
    .catch(err => next(err));
});

// create monster
router.post("/", (req, res, next) => {
  const { name, personality } = req.body;
  client
    .query("INSERT INTO monsters(name, personality) VALUES($1, $2)", [
      name,
      personality
    ])
    .then(() => res.redirect("/monsters"))
    .catch(err => next(err));
});

// update single monster by id
router.put("/:id", (req, res, next) => {
  const { id } = req.params;

  const keys = ["name", "personality"];
  const fields = [];
  keys.forEach(item => {
    if (req.body[item]) fields.push(item);
  });

  fields.forEach((item, i) => {
    client
      .query(`UPDATE monsters SET ${item}=($1) WHERE id=($2)`, [
        req.body[item],
        id
      ])
      .then(() => {
        if (i === fields.length - 1) {
          res.redirect("/monsters");
        }
      })
      .catch(err => next(err));
  });
});

// delete monster by id
router.delete("/:id", (req, res, next) => {
  client
    .query("DELETE FROM monsters WHERE id=($1)", [req.params.id])
    .then(() => res.redirect("/monsters"))
    .catch(err => next(err));
});

module.exports = router;
