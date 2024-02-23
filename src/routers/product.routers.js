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

export default router;


