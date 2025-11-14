import { create } from 'zustand';
import { CartService } from '../../domain/services/cartService';
import { localStorageAdapter } from '../../infrastructure/storage/localStorageAdapter';

const cartService = new CartService(localStorageAdapter);

export const useCartStore = create((set, get) => ({
  cart: cartService.getCart(),

  addToCart: (product, quantity = 1) => {
    const cart = cartService.addToCart(product, quantity);
    set({ cart });
  },

  removeFromCart: (productId) => {
    const cart = cartService.removeFromCart(productId);
    set({ cart });
  },

  updateQuantity: (productId, quantity) => {
    const cart = cartService.updateQuantity(productId, quantity);
    set({ cart });
  },

  clearCart: () => {
    const cart = cartService.clearCart();
    set({ cart });
  },

  getCartTotal: () => {
    return get().cart.total;
  },

  getItemCount: () => {
    return get().cart.itemCount;
  }
}));
