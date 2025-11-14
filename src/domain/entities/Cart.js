export class CartItem {
  constructor({ product, quantity = 1 }) {
    this.product = product;
    this.quantity = quantity;
  }

  get subtotal() {
    return this.product.price * this.quantity;
  }
}

export class Cart {
  constructor(items = []) {
    this.items = items;
  }

  addItem(product, quantity = 1) {
    const existingItem = this.items.find(item => item.product.id === product.id);

    if (existingItem) {
      existingItem.quantity += quantity;
    } else {
      this.items.push(new CartItem({ product, quantity }));
    }
  }

  removeItem(productId) {
    this.items = this.items.filter(item => item.product.id !== productId);
  }

  updateQuantity(productId, quantity) {
    const item = this.items.find(item => item.product.id === productId);
    if (item) {
      item.quantity = quantity;
      if (item.quantity <= 0) {
        this.removeItem(productId);
      }
    }
  }

  clear() {
    this.items = [];
  }

  get total() {
    return this.items.reduce((sum, item) => sum + item.subtotal, 0);
  }

  get itemCount() {
    return this.items.reduce((sum, item) => sum + item.quantity, 0);
  }

  get isEmpty() {
    return this.items.length === 0;
  }
}
