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
  getAllGender,
  getListByGender,
  getProductByPageGender,
  getSearchByPage,
} from "../controllers/product.controllers.js";

router.get("/productId/:id", getProductById);
router.get("/get-master-category", listMasterCategory);
router.get("/get-sub-category", listSubCategory);
router.get("/get-sub-category/:master", listSubCategoryByMaster);
router.get("/get-all-product", getAllProduct);
router.get("/get-all-product-shorted", getListProductImagePriceName);
router.get("/get-product-by-page", getProductByPage);
router.get("/get-product-by-page/:gender", getProductByPageGender);
router.get("/get-product-by-page/:master", getProductByPagemasterCategory);
router.get("/get-product-by-page/:master/:sub", getProductByPagemasterCategorysubCategory);
router.get("/get-product-base-color/:baseColour", getListProductBaseColor);
router.get("/get-product-category/:masterCategory", getListProductMasterCategory);
router.get("/get-product-category/:masterCategory/:subCategory", getListProductMasterSubCategory);
router.get("/get-all-gender", getAllGender);
router.get("/get-products-by-gender/:gender", getListByGender);
router.get("/get-search-by-page", getSearchByPage);

export default router;
