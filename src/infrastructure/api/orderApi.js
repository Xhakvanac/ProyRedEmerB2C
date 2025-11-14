import httpClient from './httpClient';
import { Order } from '../../domain/entities/Order';

export class OrderApi {
  async createOrder(orderData) {
    try {
      const response = await httpClient.post('/orders', orderData);
      return new Order(response.data);
    } catch (error) {
      console.error('Error creating order:', error);
      throw error;
    }
  }

  async getOrderById(id) {
    try {
      const response = await httpClient.get(`/orders/${id}`);
      return new Order(response.data);
    } catch (error) {
      console.error(`Error fetching order ${id}:`, error);
      throw error;
    }
  }

  async getMyOrders() {
    try {
      const response = await httpClient.get('/orders/my-orders');
      return response.data.map(o => new Order(o));
    } catch (error) {
      console.error('Error fetching orders:', error);
      throw error;
    }
  }

  async updateOrderStatus(id, status) {
    try {
      const response = await httpClient.patch(`/orders/${id}/status`, { status });
      return new Order(response.data);
    } catch (error) {
      console.error(`Error updating order ${id} status:`, error);
      throw error;
    }
  }
}

export const orderApi = new OrderApi();
