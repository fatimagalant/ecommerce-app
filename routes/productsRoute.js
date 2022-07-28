const express = require("express");
const router = express.Router();
const con = require("../lib/dbConnection");

// GET ALL
router.get("/", (req, res) => {
  try {
    con.query("SELECT * FROM products", (err, result) => {
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
    con.query(
      `SELECT * FROM products where product_id =${req.params.id}`,
      (err, result) => {
        if (err) throw err;
        res.send(result);
      }
    );
  } catch (error) {
    console.log(error);
    res.status(400).send(error);
  }
});

// POST
router.post("/", (req, res) => {
  const {
    product_id,
    sku,
    name,
    price,
    weight,
    descriptions,
    thumbnail,
    image,
    category,
    create_date,
    stock,
  } = req.body;
  try {
    con.query(
      `INSERT into products (product_id,sku,name,price,weight,descriptions,thumbnail,image,category,create_date,stock) values ("${product_id}","${sku}", "${name}", "${price}", "${weight}", "${descriptions}", "${thumbnail}", "${image}", "${category}", "${create_date}", "${stock}" )`,
      (err, result) => {
        if (err) throw err;
        res.send(result);
      }
    );
  } catch (error) {
    console.log(error);
  }
});

//  PUT
router.put("/", (req, res) => {
  const {
    product_id,
    sku,
    name,
    price,
    weight,
    descriptions,
    thumbnail,
    image,
    category,
    create_date,
    stock,
  } = req.body;
  try {
    con.query(
      `UPDATE products SET product_id="${product_id}", sku="${sku}", name="${name}", price="${price}",weight="${weight}",descriptions="${descriptions}", thumbnail="${thumbnail}",image= "${image}",category= "${category}",create_date= "${create_date}",stock= "${stock}" WHERE products.product_id="${req.params.id}"`,
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
      `DELETE from products WHERE product_id="${req.params.id}"`,
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
