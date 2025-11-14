import { useQuery } from '@tanstack/react-query';
import { ProductCard } from '../../ui/components/product/ProductCard';
import { MainLayout } from '../layouts/MainLayout';
import { ProductService } from '../../domain/services/productService';
import { ProductApiRepository } from '../../infrastructure/api/productApi';
import { useTranslation } from 'react-i18next';

const productRepository = new ProductApiRepository();
const productService = new ProductService(productRepository);

export const Home = () => {
  const { t } = useTranslation();

  const { data: products, isLoading, error } = useQuery({
    queryKey: ['products'],
    queryFn: () => productService.getAllProducts()
  });

  return (
    <MainLayout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {t('home.title')}
          </h1>
          <p className="text-xl text-gray-600">
            {t('home.subtitle')}
          </p>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">
            {t('home.featuredProducts')}
          </h2>

          {isLoading && (
            <div className="text-center py-12">
              <div className="inline-block animate-spin rounded-full h-12 w-12 border-4 border-blue-600 border-t-transparent"></div>
              <p className="mt-4 text-gray-600">{t('common.loading')}</p>
            </div>
          )}

          {error && (
            <div className="bg-red-50 border border-red-200 rounded-lg p-4 text-red-700">
              {t('common.error')}: {error.message}
            </div>
          )}

          {products && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          )}
        </div>
      </div>
    </MainLayout>
  );
};
