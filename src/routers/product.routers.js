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
} from "../controllers/product.controllers.js";

router.get("/productId/:id", getProductById);
router.get("/get-master-category", listMasterCategory);
router.get("/get-sub-category", listSubCategory);
router.get("/get-sub-category/:master", listSubCategoryByMaster);
router.get("/get-product-by-page", getProductByPage);
router.get("/get-list-product-image-price-name", getListProductImagePriceName);
router.get("/get-all-product", getAllProduct);

export default router;