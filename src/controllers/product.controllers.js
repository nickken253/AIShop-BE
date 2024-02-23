import Product from '../models/product.model.js';

export const createNew = async (req, res) => {
  try {
    const product = await new Product(req.body).save();
    res.json(product);
  } catch (error) {
    console.error(error);
    res.status(500).send("Error creating product style");
  }
};

export const getProductById = async (req, res) => {
    try {
        const productId = req.params.id;
        const product = await Product.findOne({ id: productId }).exec();
        if (!product) {
            res.status(404).send("Product not found");
            return;
        }
        res.json(product);
    } catch (error) {
        console.error(error);
        res.status(500).send("Error fetching product style");
    }
};

export const listMasterCategory = async (req, res) => {
    try {
        const masterCategories = await Product.find().distinct("masterCategory").exec();
        const masterCategoryCounts = {};
        
        for (const category of masterCategories) {
            const count = await Product.countDocuments({ masterCategory: category });
            masterCategoryCounts[category] = count;
        }
        
        res.json(masterCategoryCounts);
    } catch (error) {
        console.error(error);
        res.status(500).send("Error fetching master category");
    }
};

export const listSubCategory = async (req, res) => {
    try {
        const subCategories = await Product.find().distinct("subCategory").exec();
        const subCategoryCounts = {};
        
        for (const subCategory of subCategories) {
            const count = await Product.countDocuments({ subCategory: subCategory });
            subCategoryCounts[subCategory] = count;
        }
        res.json(subCategoryCounts);
    } catch (error) {
        console.error(error);
        res.status(500).send("Error fetching sub category");
    }
};

export const listSubCategoryByMaster = async (req, res) => {
    try {
        const masterCategory = req.params.master;
        const subCategories = await Product.find({ masterCategory: masterCategory }).distinct("subCategory").exec();
        const subCategoryCounts = {};

        for (const subCategory of subCategories) {
            const count = await Product.countDocuments({ masterCategory: masterCategory, subCategory: subCategory });
            subCategoryCounts[subCategory] = count;
        }
        res.json(subCategoryCounts);
    } catch (error) {
        console.error(error);
        res.status(500).send("Error fetching sub category");
    }
};

export const getProductByPage = async (req, res) => {
    try {
        const page = req.query.page || 1;
        const pageSize = req.query.pageSize || 30;
        const products = await Product.find().skip((page - 1) * pageSize).limit(pageSize).exec();
        res.json(products);
    } catch (error) {
        console.error(error);
        res.status(500).send("Error fetching product style");
    }
};