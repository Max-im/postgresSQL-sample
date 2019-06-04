const { Router } = require("express");
const client = require("../db");

const router = Router();

// get all monsters
router.get("/", (req, res, next) => {
  client.query("SELECT * FROM monsters ORDER BY id", (err, response) => {
    if (err) return next(err);
    res.json(response.rows);
  });
});

// get single monster by id
router.get("/:id", (req, res, next) => {
  client.query(
    "SELECT * FROM monsters WHERE id = $1",
    [req.params.id],
    (err, response) => {
      if (err) return next(err);
      res.json(response.rows);
    }
  );
});

// create monster
router.post("/", (req, res, next) => {
  const { name, personality } = req.body;
  client.query(
    "INSERT INTO monsters(name, personality) VALUES($1, $2)",
    [name, personality],
    err => {
      if (err) return next(err);
      res.redirect("/monsters");
    }
  );
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
    client.query(
      `UPDATE monsters SET ${item}=($1) WHERE id=($2)`,
      [req.body[item], id],
      err => {
        if (err) return next(err);
        if (i === fields.length - 1) res.redirect("/monsters");
      }
    );
  });
});

// delete monster by id
router.delete("/:id", (req, res, next) => {
  client.query("DELETE FROM monsters WHERE id=($1)", [req.params.id], err => {
    if (err) return next(err);
    res.redirect("/monsters");
  });
});

module.exports = router;
