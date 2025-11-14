export class Order {
  constructor({
    id,
    userId,
    items = [],
    total,
    status = 'pending',
    shippingAddress,
    createdAt = new Date(),
    updatedAt = new Date()
  }) {
    this.id = id;
    this.userId = userId;
    this.items = items;
    this.total = total;
    this.status = status;
    this.shippingAddress = shippingAddress;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
  }

  get statusText() {
    const statusMap = {
      pending: 'Pendiente',
      processing: 'En proceso',
      shipped: 'Enviado',
      delivered: 'Entregado',
      cancelled: 'Cancelado'
    };
    return statusMap[this.status] || this.status;
  }

  get formattedTotal() {
    return new Intl.NumberFormat('es-MX', {
      style: 'currency',
      currency: 'MXN'
    }).format(this.total);
  }
}
