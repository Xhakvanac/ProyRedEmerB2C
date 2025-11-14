export class ProductService {
  constructor(productRepository) {
    this.productRepository = productRepository;
  }

  async getAllProducts(filters = {}) {
    return await this.productRepository.findAll(filters);
  }

  async getProductById(id) {
    return await this.productRepository.findById(id);
  }

  async getProductsByArtisan(artisanId) {
    return await this.productRepository.findByArtisan(artisanId);
  }

  async createProduct(productData) {
    return await this.productRepository.create(productData);
  }

  async updateProduct(id, productData) {
    return await this.productRepository.update(id, productData);
  }

  async deleteProduct(id) {
    return await this.productRepository.delete(id);
  }
}
