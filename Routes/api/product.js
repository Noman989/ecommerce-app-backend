const express = require('express');
const Router = express.Router();
const { Categories } = require('../../mongo');
const { Products } = require('../../mongo');


Router.get('/:id', async (req, res) => {
    const categoryName = req.query.category;
    try {
        const product = await Products.findById(req.params.id);
        if (!product) return res.status(400).json({status: "Product does not exist"});

        res.status(200).json({status: "ok", product: product});
    } catch (err) {
        res.status(500).json({ status: "Internal Server Error!" });
    }
});

Router.post('/', async (req, res) => {
    try {
        const categoryName = req.body.category;
        const categoryId = await Categories.findOne({name: categoryName});
        if (!categoryId) return res.status(400).json({status: "Category does not exist"});

        const product = await Products.create({
            category: categoryId._id,
            image: req.body.product.image,
            price: req.body.product.price
        })

        await product.save();

        res.status(200).json({status: 'ok', product});
    } catch (err) {
        console.log(err);
        if (err) res.status(500).json({status: "Internal Server Error!", err: err});
    }
})

module.exports = Router;