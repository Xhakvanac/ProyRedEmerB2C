import { Link } from 'react-router-dom';
import { Package, BarChart3, User } from 'lucide-react';
import { Navbar } from '../../ui/components/navigation/Navbar';
import { Footer } from '../../ui/components/navigation/Footer';
import { useTranslation } from 'react-i18next';

export const ArtisanLayout = ({ children }) => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-1 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <aside className="md:col-span-1">
              <div className="bg-white rounded-lg shadow-md p-4">
                <h2 className="text-lg font-semibold mb-4">{t('artisan.dashboard')}</h2>
                <nav className="space-y-2">
                  <Link
                    to="/artisan/dashboard"
                    className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-blue-50 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <BarChart3 size={20} />
                    <span>Dashboard</span>
                  </Link>
                  <Link
                    to="/artisan/products"
                    className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-blue-50 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <Package size={20} />
                    <span>{t('artisan.myProducts')}</span>
                  </Link>
                  <Link
                    to="/artisan/profile"
                    className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-blue-50 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <User size={20} />
                    <span>{t('artisan.profile')}</span>
                  </Link>
                </nav>
              </div>
            </aside>
            <main className="md:col-span-3">
              {children}
            </main>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
