import httpClient from './httpClient';
import { ProductRepository } from '../../domain/ports/ProductRepository';
import { Product } from '../../domain/entities/Product';
import { mockProducts } from '../mock/products';

const ENABLE_MOCK = import.meta.env.VITE_ENABLE_MOCK_DATA === 'true';

export class ProductApiRepository extends ProductRepository {
  async findAll(filters = {}) {
    if (ENABLE_MOCK) {
      await new Promise(resolve => setTimeout(resolve, 300));
      return mockProducts.map(p => new Product(p));
    }

    try {
      const response = await httpClient.get('/products', { params: filters });
      return response.data.map(p => new Product(p));
    } catch (error) {
      console.error('Error fetching products:', error);
      throw error;
    }
  }

  async findById(id) {
    if (ENABLE_MOCK) {
      await new Promise(resolve => setTimeout(resolve, 200));
      const product = mockProducts.find(p => p.id === id);
      return product ? new Product(product) : null;
    }

    try {
      const response = await httpClient.get(`/products/${id}`);
      return new Product(response.data);
    } catch (error) {
      console.error(`Error fetching product ${id}:`, error);
      throw error;
    }
  }

  async findByArtisan(artisanId) {
    if (ENABLE_MOCK) {
      await new Promise(resolve => setTimeout(resolve, 250));
      return mockProducts
        .filter(p => p.artisan.id === artisanId)
        .map(p => new Product(p));
    }

    try {
      const response = await httpClient.get(`/artisans/${artisanId}/products`);
      return response.data.map(p => new Product(p));
    } catch (error) {
      console.error(`Error fetching products for artisan ${artisanId}:`, error);
      throw error;
    }
  }

  async create(productData) {
    try {
      const response = await httpClient.post('/products', productData);
      return new Product(response.data);
    } catch (error) {
      console.error('Error creating product:', error);
      throw error;
    }
  }

  async update(id, productData) {
    try {
      const response = await httpClient.put(`/products/${id}`, productData);
      return new Product(response.data);
    } catch (error) {
      console.error(`Error updating product ${id}:`, error);
      throw error;
    }
  }

  async delete(id) {
    try {
      await httpClient.delete(`/products/${id}`);
      return true;
    } catch (error) {
      console.error(`Error deleting product ${id}:`, error);
      throw error;
    }
  }
}
