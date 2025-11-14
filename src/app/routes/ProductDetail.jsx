import { useParams, Link } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { ArrowLeft, ShoppingCart, MapPin } from 'lucide-react';
import { MainLayout } from '../layouts/MainLayout';
import { ProductGallery } from '../../ui/components/product/ProductGallery';
import { Button } from '../../ui/components/common/Button';
import { ProductService } from '../../domain/services/productService';
import { ProductApiRepository } from '../../infrastructure/api/productApi';
import { useCart } from '../../ui/hooks/useCart';
import { useTranslation } from 'react-i18next';

const productRepository = new ProductApiRepository();
const productService = new ProductService(productRepository);

export const ProductDetail = () => {
  const { id } = useParams();
  const { t } = useTranslation();
  const { addToCart } = useCart();

  const { data: product, isLoading, error } = useQuery({
    queryKey: ['product', id],
    queryFn: () => productService.getProductById(id)
  });

  const handleAddToCart = () => {
    if (product) {
      addToCart(product, 1);
    }
  };

  if (isLoading) {
    return (
      <MainLayout>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">
          <div className="inline-block animate-spin rounded-full h-12 w-12 border-4 border-blue-600 border-t-transparent"></div>
          <p className="mt-4 text-gray-600">{t('common.loading')}</p>
        </div>
      </MainLayout>
    );
  }

  if (error || !product) {
    return (
      <MainLayout>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="bg-red-50 border border-red-200 rounded-lg p-4 text-red-700">
            {t('common.error')}: Producto no encontrado
          </div>
          <Link to="/" className="inline-flex items-center gap-2 mt-4 text-blue-600 hover:underline">
            <ArrowLeft size={20} />
            Volver al inicio
          </Link>
        </div>
      </MainLayout>
    );
  }

  return (
    <MainLayout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-blue-600 hover:underline mb-6 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded"
        >
          <ArrowLeft size={20} />
          Volver al catálogo
        </Link>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <ProductGallery images={product.images} alt={product.title} />
          </div>

          <div className="space-y-6">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">
                {product.title}
              </h1>
              <p className="text-3xl font-bold text-blue-600">
                {product.formattedPrice}
              </p>
            </div>

            <div className="border-t border-b py-4">
              <div className="flex items-start gap-3">
                <img
                  src={product.artisan.avatar}
                  alt={product.artisan.name}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div>
                  <p className="font-semibold text-gray-900">{product.artisan.name}</p>
                  <p className="text-sm text-gray-600 flex items-center gap-1">
                    <MapPin size={14} />
                    {product.artisan.community}
                  </p>
                  <p className="text-sm text-gray-600 mt-1">{product.artisan.story}</p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-lg font-semibold mb-2">{t('product.description')}</h2>
              <p className="text-gray-700 leading-relaxed">{product.description}</p>
            </div>

            <div className="space-y-3">
              <div>
                <span className="font-semibold">{t('product.materials')}: </span>
                <span className="text-gray-700">{product.materials.join(', ')}</span>
              </div>
              <div>
                <span className="font-semibold">{t('product.dimensions')}: </span>
                <span className="text-gray-700">
                  {Object.entries(product.dimensions).map(([key, value]) => `${value}`).join(' × ')}
                </span>
              </div>
              <div>
                <span className="font-semibold">{t('product.stock')}: </span>
                <span className={product.isAvailable ? 'text-green-600' : 'text-red-600'}>
                  {product.isAvailable ? `${product.stock} ${t('product.stock').toLowerCase()}` : t('product.outOfStock')}
                </span>
              </div>
            </div>

            <Button
              onClick={handleAddToCart}
              disabled={!product.isAvailable}
              size="lg"
              className="w-full flex items-center justify-center gap-2"
            >
              <ShoppingCart size={20} />
              {product.isAvailable ? t('product.addToCart') : t('product.outOfStock')}
            </Button>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};
