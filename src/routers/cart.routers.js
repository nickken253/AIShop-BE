import express from "express";
import { authenticateToken } from "../middleware/JWTAction.js";
const router = express.Router();
import {
    getCartByUserId,
    createNewCart,
    updateCart,
    deleteCart,
    addCartItem,
    updateCartItem,
    deleteCartItem,
    emptyCart,
    getCartItem,
    getCartItems,
    getCartTotalQuantity,
    getCartTotalPrice,
} from "../controllers/cart.controllers.js";

router.get("/get-cart/:userId", authenticateToken, getCartByUserId);
router.post("/create-cart", authenticateToken, createNewCart);
// router.put("/update-cart/:userId", updateCart);
// router.delete("/delete-cart/:userId", deleteCart);
router.post("/add-cart-item/:userId", authenticateToken, addCartItem);
router.put("/update-cart-item/:userId", authenticateToken, updateCartItem); // CHÚ Ý CÁI NÀY, XEM LÀ PUT HAY DELETE
router.put("/delete-cart-item/:userId", authenticateToken, deleteCartItem);
router.put("/empty-cart/:userId", authenticateToken, emptyCart);
router.get("/get-cart-item/:userId/:productId",authenticateToken, getCartItem);
router.get("/get-cart-items/:userId", authenticateToken, getCartItems);
router.get("/get-cart-total-quantity/:userId", authenticateToken, getCartTotalQuantity);
router.get("/get-cart-total-price/:userId", authenticateToken, getCartTotalPrice);

export default router;
