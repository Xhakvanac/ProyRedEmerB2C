import { useCartStore } from '../../core/store/cartStore';

export const useCart = () => {
  const {
    cart,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    getCartTotal,
    getItemCount
  } = useCartStore();

  return {
    cart,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    total: getCartTotal(),
    itemCount: getItemCount()
  };
};
