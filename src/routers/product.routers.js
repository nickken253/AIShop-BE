import express from 'express';
const router = express.Router();
import { getProductById, listMasterCategory, listSubCategory, listSubCategoryByMaster } from '../controllers/product.controllers.js';

router.get("/productId/:id",  getProductById);
router.get("/get-master-category", listMasterCategory);
router.get("/get-sub-category", listSubCategory);
router.get("/get-sub-category/:master",listSubCategoryByMaster);

export default router;