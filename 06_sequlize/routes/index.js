import { Router } from "express";
import User from "../db/User";

const router = Router();

/**
 * Create
 */
router.post("/", (req, res, next) => {
  const { username, birthday } = req.body;
  User.create({ username, birthday })
    .then(() => res.redirect("/"))
    .catch(err => next(err));
});

/**
 * Read
 */
router.get("/", (req, res, next) => {
  User.findAll()
    .then(users => res.json(users.sort((a, b) => (a.id > b.id ? 1 : -1))))
    .catch(err => next(err));
});

/**
 * Read single
 */
router.get("/:id", (req, res, next) => {
  User.findAll({ where: { id: req.params.id } })
    .then(users => res.json(users))
    .catch(err => next(err));
});

/**
 * Update
 */
router.put("/:id", (req, res, next) => {
  User.update(req.body, { where: { id: req.params.id } })
    .then(() => res.redirect("/"))
    .catch(err => next(err));
});

/**
 * Delete
 */
router.delete("/:id", (req, res, next) => {
  User.destroy({ where: { id: req.params.id } })
    .then(() => res.redirect("/"))
    .catch(err => next(err));
});

module.exports = router;
