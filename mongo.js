const mongoose = require('mongoose');

const { Schema } = mongoose;

const connect_to_mongodb = async () => {
    console.log("⚙️⚙️⚙️ Connecting to MongoDB... \n");
    mongoose.connect('mongodb+srv://e4coder:123qwefast@cluster0.kuggd.mongodb.net/ecommerce-app?retryWrites=true&w=majority');
    console.log("⚡⚡⚡ Connected to MongoDB \n");
}

const CategorySchema = new Schema({
    name: String
});
const Categories = mongoose.model('Categories', CategorySchema);

const ProductSchema = new Schema({
    category: Schema.Types.ObjectId,
    image: Schema.Types.String,
    price: Schema.Types.Number
})
const Products = mongoose.model('Products', ProductSchema);

exports.connect = connect_to_mongodb;
exports.Categories = Categories;
exports.Products = Products;