import { Link } from 'react-router-dom';
import { Trash2, Plus, Minus, ShoppingBag } from 'lucide-react';
import { MainLayout } from '../layouts/MainLayout';
import { Button } from '../../ui/components/common/Button';
import { useCart } from '../../ui/hooks/useCart';
import { useTranslation } from 'react-i18next';

export const Cart = () => {
  const { t } = useTranslation();
  const { cart, removeFromCart, updateQuantity, total } = useCart();

  const handleQuantityChange = (productId, currentQuantity, delta) => {
    const newQuantity = currentQuantity + delta;
    if (newQuantity > 0) {
      updateQuantity(productId, newQuantity);
    }
  };

  const formattedTotal = new Intl.NumberFormat('es-MX', {
    style: 'currency',
    currency: 'MXN'
  }).format(total);

  if (cart.isEmpty) {
    return (
      <MainLayout>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <ShoppingBag size={64} className="mx-auto text-gray-400 mb-4" />
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">
              {t('cart.empty')}
            </h2>
            <p className="text-gray-600 mb-6">
              Agrega productos para comenzar tu compra
            </p>
            <Link to="/">
              <Button>{t('cart.continueShopping')}</Button>
            </Link>
          </div>
        </div>
      </MainLayout>
    );
  }

  return (
    <MainLayout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">{t('cart.title')}</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-4">
            {cart.items.map((item) => (
              <div
                key={item.product.id}
                className="bg-white rounded-lg shadow-md p-4 flex gap-4"
              >
                <img
                  src={item.product.mainImage}
                  alt={item.product.title}
                  className="w-24 h-24 object-cover rounded-lg"
                />

                <div className="flex-1">
                  <Link
                    to={`/product/${item.product.id}`}
                    className="text-lg font-semibold text-gray-900 hover:text-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded"
                  >
                    {item.product.title}
                  </Link>
                  <p className="text-sm text-gray-600">
                    {item.product.artisan.name}
                  </p>
                  <p className="text-lg font-semibold text-blue-600 mt-2">
                    {item.product.formattedPrice}
                  </p>
                </div>

                <div className="flex flex-col items-end justify-between">
                  <button
                    onClick={() => removeFromCart(item.product.id)}
                    className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-red-500"
                    aria-label={`${t('cart.remove')} ${item.product.title}`}
                  >
                    <Trash2 size={20} />
                  </button>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => handleQuantityChange(item.product.id, item.quantity, -1)}
                      className="p-1 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
                      aria-label="Decrease quantity"
                    >
                      <Minus size={16} />
                    </button>
                    <span className="w-12 text-center font-semibold">
                      {item.quantity}
                    </span>
                    <button
                      onClick={() => handleQuantityChange(item.product.id, item.quantity, 1)}
                      className="p-1 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
                      aria-label="Increase quantity"
                    >
                      <Plus size={16} />
                    </button>
                  </div>

                  <p className="text-lg font-semibold text-gray-900 mt-2">
                    {new Intl.NumberFormat('es-MX', {
                      style: 'currency',
                      currency: 'MXN'
                    }).format(item.subtotal)}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-md p-6 sticky top-20">
              <h2 className="text-xl font-semibold mb-4">Resumen de compra</h2>

              <div className="space-y-3 mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-600">{t('cart.subtotal')}</span>
                  <span className="font-semibold">{formattedTotal}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Envío</span>
                  <span className="font-semibold">Calculado en checkout</span>
                </div>
                <div className="border-t pt-3 flex justify-between text-lg">
                  <span className="font-semibold">{t('cart.total')}</span>
                  <span className="font-bold text-blue-600">{formattedTotal}</span>
                </div>
              </div>

              <Button size="lg" className="w-full mb-3">
                {t('cart.checkout')}
              </Button>

              <Link to="/">
                <Button variant="outline" size="lg" className="w-full">
                  {t('cart.continueShopping')}
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};
