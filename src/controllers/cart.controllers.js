import Cart from "../models/cart.model.js";

export const getCartByUserId = async (req, res) => {
  const userId = req.params.userId;
  try {
    const cart = await Cart.findOne({ userId: userId });
    if (!cart) {
      return res.status(404).json({ message: "Cart not found" });
    }
    res.json(cart);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error fetching cart" });
  }
};

export const createNewCart = async (req, res) => {
  try {
    const cart = await new Cart(req.body).save();
    res.json(cart);
  } catch (error) {
    console.error(error);
    res.status(500).send("Error creating cart");
  }
};

export const updateCart = async (req, res) => {
  const userId = req.params.userId;
  try {
    const cart = await Cart.findOne({ userId: userId });
    if (!cart) {
      return res.status(404).json({ message: "Cart not found" });
    }
    cart.items = req.body.items;
    cart.totalQuantity = req.body.totalQuantity;
    cart.totalPrice = req.body.totalPrice;
    await cart.save();
    res.json(cart);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error updating cart" });
  }
};

export const deleteCart = async (req, res) => {
  const userId = req.params.userId;
  try {
    const cart = await Cart.findOne({ userId: userId });
    if (!cart) {
      return res.status(404).json({ message: "Cart not found" });
    }
    await cart.remove();
    res.json({ message: "Cart deleted" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error deleting cart" });
  }
};

export const addCartItem = async (req, res) => {
  const userId = req.params.userId;
  try {
    const cart = await Cart.findOne({ userId: userId });
    if (!cart) {
      return res.status(404).json({ message: "Cart not found" });
    }
    let itemIndex = cart.items.findIndex(
      (item) => item.productId === req.body.productId
    );
    if (itemIndex !== -1) {
      // Nếu sản phẩm đã tồn tại, cập nhật thông tin của nó
      cart.items[itemIndex].quantity += req.body.quantity;
      cart.items[itemIndex].totalPrice += req.body.totalPrice;
      cart.totalQuantity += req.body.quantity;
      cart.totalPrice += req.body.totalPrice;
    } else {
      // Nếu sản phẩm chưa tồn tại, thêm mới vào giỏ hàng
      cart.items.push(req.body);
      cart.totalQuantity += req.body.quantity;
      cart.totalPrice += req.body.totalPrice;
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error adding item to cart" });
  }
};

export const updateCartItem = async (req, res) => {
  const userId = req.params.userId;
  const productId = req.params.productId;
  try {
    const cart = await Cart.findOne({ userId: userId });
    if (!cart) {
      return res.status(404).json({ message: "Cart not found" });
    }
    const item = cart.items.id(productId);
    if (!item) {
      return res.status(404).json({ message: "Item not found" });
    }
    item.quantity = req.body.quantity;
    item.totalPrice = req.body.totalPrice;
    cart.totalQuantity = 0;
    cart.totalPrice = 0;
    for (const item of cart.items) {
      cart.totalQuantity += item.quantity;
      cart.totalPrice += item.totalPrice;
    }
    await cart.save();
    res.json(cart);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error updating item in cart" });
  }
};

export const deleteCartItem = async (req, res) => {
  const userId = req.params.userId;
  const productId = req.params.productId;
  try {
    const cart = await Cart.findOne({ userId: userId });
    if (!cart) {
      return res.status(404).json({ message: "Cart not found" });
    }
    const item = cart.items.id(productId);
    if (!item) {
      return res.status(404).json({ message: "Item not found" });
    }
    cart.totalQuantity -= item.quantity;
    cart.totalPrice -= item.totalPrice;
    item.remove();
    await cart.save();
    res.json(cart);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error deleting item from cart" });
  }
};

export const emptyCart = async (req, res) => {
  const userId = req.params.userId;
  try {
    const cart = await Cart.findOne({ userId: userId });
    if (!cart) {
      return res.status(404).json({ message: "Cart not found" });
    }
    cart.items = [];
    cart.totalQuantity = 0;
    cart.totalPrice = 0;
    await cart.save();
    res.json(cart);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error emptying cart" });
  }
};

export const getCartItem = async (req, res) => {
  const userId = req.params.userId;
  const productId = req.params.productId;
  try {
    const cart = await Cart.findOne({ userId: userId });
    if (!cart) {
      return res.status(404).json({ message: "Cart not found" });
    }
    const item = cart.items.id(productId);
    if (!item) {
      return res.status(404).json({ message: "Item not found" });
    }
    res.json(item);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error fetching item from cart" });
  }
};

export const getCartItems = async (req, res) => {
  const userId = req.params.userId;
  try {
    const cart = await Cart.findOne({ userId: userId });
    if (!cart) {
      return res.status(404).json({ message: "Cart not found" });
    }
    res.json(cart.items);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error fetching items from cart" });
  }
};

export const getCartTotalQuantity = async (req, res) => {
  const userId = req.params.userId;
  try {
    const cart = await Cart.findOne({ userId: userId });
    if (!cart) {
      return res.status(404).json({ message: "Cart not found" });
    }
    res.json(cart.totalQuantity);
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ message: "Error fetching total quantity from cart" });
  }
};

export const getCartTotalPrice = async (req, res) => {
  const userId = req.params.userId;
  try {
    const cart = await Cart.findOne({ userId: userId });
    if (!cart) {
      return res.status(404).json({ message: "Cart not found" });
    }
    res.json(cart.totalPrice);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error fetching total price from cart" });
  }
};
