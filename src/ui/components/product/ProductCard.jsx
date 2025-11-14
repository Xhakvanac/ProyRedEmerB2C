import { Link } from 'react-router-dom';
import { ShoppingCart } from 'lucide-react';
import { Button } from '../common/Button';
import { useCart } from '../../hooks/useCart';

export const ProductCard = ({ product }) => {
  const { addToCart } = useCart();

  const handleAddToCart = (e) => {
    e.preventDefault();
    addToCart(product, 1);
  };

  return (
    <Link
      to={`/product/${product.id}`}
      className="group bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
    >
      <div className="aspect-square overflow-hidden bg-gray-200">
        <img
          src={product.mainImage}
          alt={product.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          loading="lazy"
        />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800 mb-1 line-clamp-2 group-hover:text-blue-600 transition-colors">
          {product.title}
        </h3>
        <p className="text-sm text-gray-600 mb-2">
          por {product.artisan.name}
        </p>
        <div className="flex items-center justify-between">
          <span className="text-xl font-bold text-blue-600">
            {product.formattedPrice}
          </span>
          <Button
            size="sm"
            onClick={handleAddToCart}
            disabled={!product.isAvailable}
            className="flex items-center gap-1"
            aria-label={`Add ${product.title} to cart`}
          >
            <ShoppingCart size={16} />
            <span className="sr-only">Add to cart</span>
          </Button>
        </div>
        {!product.isAvailable && (
          <p className="text-sm text-red-500 mt-2">Agotado</p>
        )}
      </div>
    </Link>
  );
};
