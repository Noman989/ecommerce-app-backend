const express = require('express');
const Router = express.Router();
const { Categories } = require('../../mongo');

Router.get('/', (req, res) => {
    Categories.find((err, data) => {
        if (err) {
            return res.status(500).json({ "status": "Internal Server Error!" });
        }

        res.status(200).json({
            "status": "ok",
            "categories": data
        })
    })
});

Router.post('/', async (req, res) => {
    try {
        console.log(req.body)

        const data = await Categories.findOne({ name: req.body.name });
        if (data) {
            return res.status(400).json({ status: "Category already exists" });
        }

        const newData = await Categories.create({ name: req.body.name })
        await newData.save();
        res.status(200).json({ status: "new category created", category: { name: newData.name } });
    } catch (error) {
        res.status(500).json({ status: "Internal Server Error!!" });
    }
})

module.exports = Router;