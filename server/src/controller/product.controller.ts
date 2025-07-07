import { Request, Response } from "express";
import { datasource } from "../config/datasource";
import { Products } from "../entity/product";

const repo = datasource.getRepository(Products);

// Get all products
export const getProducts = async (_: Request, res: Response): Promise<void> => {
  const products = await repo.find();
  res.json(products); 
};

// Get product by SKU
export const getProductsByID = async (req: Request, res: Response): Promise<void> => {
  const { sku } = req.params;

  const product = await repo.findOneBy({ sku: parseInt(sku) });
  if (!product) {
    res.status(404).json({ message: "Product not found" });
    return;
  }

  res.json(product);
};

// Add a product
export const add = async (req: Request, res: Response): Promise<void> => {
  try {
    const { name, price, description } = req.body;
    const files = req.files as Express.Multer.File[];

    const imageUrls = files.map((file) => file.path);

    const newProduct = repo.create({
      name,
      price,
      description,
      images: imageUrls,
    });

    const result = await repo.save(newProduct);

    res.status(200).json({ message: "Product added successfully", result });
  } catch (error) {
    console.log("Error creating product", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

// Update product
export const updateProduct = async (req: Request, res: Response): Promise<void> => {
  try {
    const { sku } = req.params;
    const { name, price, description } = req.body;
    const files = req.files as Express.Multer.File[];

    const existingProduct = await repo.findOneBy({ sku: parseInt(sku) });
    if (!existingProduct) {
      res.status(404).json({ message: "Product not found" });
      return;
    }

    let updatedImages = existingProduct.images;
    if (files && files.length > 0) {
      updatedImages = files.map((file) => file.path);
    }

    await repo.update({ sku: parseInt(sku) }, {
      name,
      price,
      description,
      images: updatedImages,
    });

    res.status(200).json({ message: "Product updated successfully" });
  } catch (error) {
    console.log("Error updating product", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

// Delete product
export const deleteProduct = async (req: Request, res: Response): Promise<void> => {
  try {
    const { sku } = req.params;

    const existingProduct = await repo.findOneBy({ sku: parseInt(sku) });
    if (!existingProduct) {
      res.status(404).json({ message: "Product not found" });
      return;
    }

    await repo.delete({ sku: parseInt(sku) });

    res.status(200).json({ message: "Product deleted successfully" });
  } catch (error) {
    console.log("Error deleting product", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};
