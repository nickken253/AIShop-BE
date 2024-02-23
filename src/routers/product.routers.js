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
router.get("/get-product-by-page", getProductByPage);
router.get("/get-list-product-image-price-name", getListProductImagePriceName);
router.get("/get-all-product", getAllProduct);
router.get("/get-product-by-page/:master", getProductByPagemasterCategory);
router.get("/get-product-by-page-master-category/:master", getProductByPagemasterCategory);
// router.get("/get-product-by-page-master-category-sub-category/:master/:sub", getProductByPagemasterCategorysubCategory);
router.get("/get-product-by-page-master-category/:master/:sub", getProductByPagemasterCategorysubCategory);

export default router;


