import express from "express";
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

router.get("/get-cart/:userId", getCartByUserId);
router.post("/create-cart", createNewCart);
// router.put("/update-cart/:userId", updateCart);
// router.delete("/delete-cart/:userId", deleteCart);
router.post("/add-cart-item/:userId", addCartItem);
router.put("/update-cart-item/:userId", updateCartItem); // CHÚ Ý CÁI NÀY, XEM LÀ PUT HAY DELETE
router.put("/delete-cart-item", deleteCartItem);
router.put("/empty-cart/:userId", emptyCart);
router.get("/get-cart-item/:userId/:productId", getCartItem);
router.get("/get-cart-items/:userId", getCartItems);
router.get("/get-cart-total-quantity/:userId", getCartTotalQuantity);
router.get("/get-cart-total-price/:userId", getCartTotalPrice);

export default router;
