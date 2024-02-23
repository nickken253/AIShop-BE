import express from "express";
const router = express.Router();
import {
  getProductById,
  listMasterCategory,
  listSubCategory,
  listSubCategoryByMaster,
  getProductByPage,
  getListProductImagePriceName,
  getAllProduct,
  getProductByPagemasterCategory,
    getProductByPagemasterCategorysubCategory,
    getListProductBaseColor,
    getListProductMasterCategory,
    getListProductMasterSubCategory,
} from "../controllers/product.controllers.js";

router.get("/productId/:id", getProductById);
router.get("/get-master-category", listMasterCategory);
router.get("/get-sub-category", listSubCategory);
router.get("/get-sub-category/:master", listSubCategoryByMaster);
router.get("/get-all-product", getAllProduct);
router.get("/get-all-product-shorted", getListProductImagePriceName);
router.get("/get-product-by-page", getProductByPage);
router.get("/get-product-by-page/:master", getProductByPagemasterCategory);
router.get("/get-product-by-page/:master/:sub", getProductByPagemasterCategorysubCategory);
router.get("/get-product-base-color/:baseColour", getListProductBaseColor);
router.get("/get-product-category/:masterCategory", getListProductMasterCategory);
router.get("/get-product-category/:masterCategory/:subCategory", getListProductMasterSubCategory);

export default router;


export const getListProductBaseColor = async (req, res) => {
    const baseColour = req.params.baseColour;
    try {
        const products = await Product.find({ baseColour: baseColour }).exec();
        res.json(products);
    }
    catch (error) {
        console.error(error);
        res.status(500).send("Error fetching product style");
    }
};

export const getListProductMasterCategory = async (req, res) => {
    const masterCategory = req.params.masterCategory;
    try {
        const products = await Product.find({ masterCategory: masterCategory }).exec();
        res.json(products);
    }
    catch (error) {
        console.error(error);
        res.status(500).send("Error fetching product style");
    }
}

export const getListProductMasterSubCategory = async (req, res) => {
    const masterCategory = req.params.masterCategory;
    const subCategory = req.params.subCategory;
    try {
        const products = await Product.find({ masterCategory: masterCategory, subCategory: subCategory }).exec();
        res.json(products);
    }
    catch (error) {
        console.error(error);
        res.status(500).send("Error fetching product style");
    }
}