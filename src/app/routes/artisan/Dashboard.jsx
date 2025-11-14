import { ArtisanLayout } from '../../layouts/ArtisanLayout';
import { Package, DollarSign, ShoppingBag, TrendingUp } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export const Dashboard = () => {
  const { t } = useTranslation();

  const stats = [
    {
      label: 'Productos activos',
      value: '6',
      icon: Package,
      color: 'bg-blue-500'
    },
    {
      label: 'Ventas del mes',
      value: '$12,450',
      icon: DollarSign,
      color: 'bg-green-500'
    },
    {
      label: 'Pedidos pendientes',
      value: '8',
      icon: ShoppingBag,
      color: 'bg-yellow-500'
    },
    {
      label: 'Crecimiento',
      value: '+23%',
      icon: TrendingUp,
      color: 'bg-purple-500'
    }
  ];

  return (
    <ArtisanLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            {t('artisan.dashboard')}
          </h1>
          <p className="text-gray-600">
            Bienvenida, María González
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <div
                key={stat.label}
                className="bg-white rounded-lg shadow-md p-6"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-gray-600 text-sm mb-1">{stat.label}</p>
                    <p className="text-3xl font-bold text-gray-900">{stat.value}</p>
                  </div>
                  <div className={`${stat.color} p-3 rounded-lg`}>
                    <Icon size={24} className="text-white" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4">Pedidos recientes</h2>
          <div className="space-y-4">
            {[1, 2, 3].map((i) => (
              <div key={i} className="flex items-center justify-between border-b pb-4 last:border-0">
                <div>
                  <p className="font-semibold">Pedido #{1000 + i}</p>
                  <p className="text-sm text-gray-600">Cliente: Juan Pérez</p>
                </div>
                <div className="text-right">
                  <p className="font-semibold text-green-600">$1,250</p>
                  <p className="text-sm text-gray-600">Pendiente</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-blue-900 mb-2">
            💡 Consejo del día
          </h3>
          <p className="text-blue-800">
            Actualiza las fotos de tus productos con mejor iluminación natural para aumentar las ventas hasta un 30%.
          </p>
        </div>
      </div>
    </ArtisanLayout>
  );
};
