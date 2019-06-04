const { Router } = require("express");

const router = Router();
router.use("/monsters", require("./monsters"));
router.use("/habitats", require("./habitats"));
router.use("/lives", require("./lives"));

module.exports = router;
