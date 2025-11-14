import { Cart } from '../entities/Cart';

export class CartService {
  constructor(storageAdapter) {
    this.storageAdapter = storageAdapter;
    this.STORAGE_KEY = 'marketplace_cart';
  }

  getCart() {
    const cartData = this.storageAdapter.getItem(this.STORAGE_KEY);
    if (cartData) {
      return new Cart(cartData.items || []);
    }
    return new Cart();
  }

  saveCart(cart) {
    this.storageAdapter.setItem(this.STORAGE_KEY, { items: cart.items });
  }

  addToCart(product, quantity = 1) {
    const cart = this.getCart();
    cart.addItem(product, quantity);
    this.saveCart(cart);
    return cart;
  }

  removeFromCart(productId) {
    const cart = this.getCart();
    cart.removeItem(productId);
    this.saveCart(cart);
    return cart;
  }

  updateQuantity(productId, quantity) {
    const cart = this.getCart();
    cart.updateQuantity(productId, quantity);
    this.saveCart(cart);
    return cart;
  }

  clearCart() {
    const cart = new Cart();
    this.saveCart(cart);
    return cart;
  }
}
