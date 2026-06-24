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

export const updateProduct = async(req,res)=>{
      await Product.findByIdAndUpdate(req.params.id,req.body,{new:true});
      res.status(200).json({message:"Product updated successfully.!"})
}

export const deleteProduct = async(req,res)=>{
  await Product.findByIdAndDelete(req.params.id);
  res.status(200).json({message:"Product delete successfully.!"})
}

export const getAllProducts = async(req,res)=>{
  const products = await Product.find();
  res.status(200).json(products);
}

export const getProductById = async(req,res)=>{
  const product = await Product.findById(req.params.id);
  res.status(200).json(product);
}