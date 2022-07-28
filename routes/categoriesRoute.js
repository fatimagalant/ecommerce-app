const express = require("express");
const router = express.Router();
const con = require("../lib/dbConnection");

// GET ALL
router.get("/", (req, res) => {
  try {
    con.query("SELECT * FROM categories", (err, result) => {
      if (err) throw err;
      res.send(result);
    });
  } catch (error) {
    console.log(error);
  }
});
// GET ONE
router.get("/:id", (req, res) => {
  try {
    res.send({ id: req.params.id });
  } catch (error) {
    console.log(error);
    res.status(400).send(error);
  }
});
// GET POST
router.post("/", (req, res) => {
  const { category_id, name, description, thumbnail } = req.body;
  try {
    con.query(
      `INSERT into categories (category_id,
   name,
   description,
   thumbnail) values ("${category_id}", "${name}", "${description}", "${thumbnail}" )`,
      (err, result) => {
        if (err) throw err;
        res.send(result);
      }
    );
  } catch (error) {
    console.log(error);
  }
});
// PUT
router.put("/:id", (req, res) => {
  const { category_id, name, description, thumbnail } = req.body;
  try {
    con.query(
      `UPDATE categories SET category_id="${category_id}", name="${name}", description="${description}", thumbnail="${thumbnail}" WHERE category_id="${req.params.id}"`,
      (err, result) => {
        if (err) throw err;
        res.send(result);
      }
    );
  } catch (error) {
    console.log(error);
  }
});
// DELETE
router.delete("/:id", (req, res) => {
  try {
    con.query(
      `DELETE from categories WHERE category_id="${req.params.id}"`,
      (err, result) => {
        if (err) throw err;
        res.send(result);
      }
    );
  } catch (error) {
    console.log(error);
  }
});
module.exports = router;
