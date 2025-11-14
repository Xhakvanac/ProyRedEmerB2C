export class ProductRepository {
  async findAll(filters = {}) {
    throw new Error('Method findAll() must be implemented');
  }

  async findById(id) {
    throw new Error('Method findById() must be implemented');
  }

  async findByArtisan(artisanId) {
    throw new Error('Method findByArtisan() must be implemented');
  }

  async create(productData) {
    throw new Error('Method create() must be implemented');
  }

  async update(id, productData) {
    throw new Error('Method update() must be implemented');
  }

  async delete(id) {
    throw new Error('Method delete() must be implemented');
  }
}
