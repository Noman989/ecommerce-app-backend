const express = require('express');
const Router = express.Router();
const { Categories } = require('../../mongo');
const { Products } = require('../../mongo');


Router.get('/', async (req, res) => {
    const categoryName = req.query.category;
    try {
        const category = await Categories.findOne({ name: categoryName });
        if (!category) return res.status(400).json({ status: "Category Does Not Exist!" });

        const objId = category._id;
        const products = await Products.find({ category: objId });
        res.status(200).json({
            status: "ok",
            products: products
        })
    } catch (err) {
        res.status(500).json({ status: "Internal Server Error!" });
    }
});

module.exports = Router;