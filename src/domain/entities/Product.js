export class Product {
  constructor({
    id,
    title,
    description,
    price,
    images = [],
    artisan,
    category,
    stock = 0,
    materials = [],
    dimensions = {}
  }) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.price = price;
    this.images = images;
    this.artisan = artisan;
    this.category = category;
    this.stock = stock;
    this.materials = materials;
    this.dimensions = dimensions;
  }

  get mainImage() {
    return this.images[0] || 'https://images.pexels.com/photos/1337380/pexels-photo-1337380.jpeg';
  }

  get isAvailable() {
    return this.stock > 0;
  }

  get formattedPrice() {
    return new Intl.NumberFormat('es-MX', {
      style: 'currency',
      currency: 'MXN'
    }).format(this.price);
  }
}
