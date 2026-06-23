import Product from "../models/Products.js";

export const createProduct = async (req, res) => {
  const { name, description, price, category, image } = req.body;

  await Product.create({
    name,
    description,
    price,
    category,
    image
  })

  res.status(201).json({message:"Product Added Successfully.!"})

};
