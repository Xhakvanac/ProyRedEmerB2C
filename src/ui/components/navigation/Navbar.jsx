import { Link } from 'react-router-dom';
import { ShoppingCart, Menu, X, Globe, Type, Contrast } from 'lucide-react';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useCart } from '../../hooks/useCart';
import { useAccessibility } from '../../hooks/useAccessibility';

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t, i18n } = useTranslation();
  const { itemCount } = useCart();
  const { increaseFontSize, toggleHighContrast, highContrast } = useAccessibility();

  const toggleLanguage = () => {
    const newLang = i18n.language === 'es' ? 'en' : 'es';
    i18n.changeLanguage(newLang);
  };

  return (
    <nav className="bg-white shadow-md sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link
            to="/"
            className="flex items-center space-x-2 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-lg"
          >
            <span className="text-2xl font-bold text-blue-600">Artesanías</span>
          </Link>

          <div className="hidden md:flex items-center space-x-6">
            <Link
              to="/"
              className="text-gray-700 hover:text-blue-600 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 rounded px-2 py-1"
            >
              {t('nav.home')}
            </Link>
            <Link
              to="/artisan/dashboard"
              className="text-gray-700 hover:text-blue-600 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 rounded px-2 py-1"
            >
              {t('nav.dashboard')}
            </Link>

            <button
              onClick={toggleLanguage}
              className="p-2 rounded-lg hover:bg-gray-100 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
              aria-label={t('accessibility.language')}
              title={`${i18n.language === 'es' ? 'English' : 'Español'}`}
            >
              <Globe size={20} />
            </button>

            <button
              onClick={increaseFontSize}
              className="p-2 rounded-lg hover:bg-gray-100 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
              aria-label={t('accessibility.increaseFontSize')}
              title="A+"
            >
              <Type size={20} />
            </button>

            <button
              onClick={toggleHighContrast}
              className={`p-2 rounded-lg hover:bg-gray-100 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                highContrast ? 'bg-gray-200' : ''
              }`}
              aria-label={t('accessibility.highContrast')}
              aria-pressed={highContrast}
            >
              <Contrast size={20} />
            </button>

            <Link
              to="/cart"
              className="relative p-2 rounded-lg hover:bg-gray-100 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
              aria-label={`${t('nav.cart')} - ${itemCount} items`}
            >
              <ShoppingCart size={24} />
              {itemCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                  {itemCount}
                </span>
              )}
            </Link>
          </div>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <div className="flex flex-col space-y-3">
              <Link
                to="/"
                className="text-gray-700 hover:text-blue-600 transition-colors px-2 py-1"
                onClick={() => setIsMenuOpen(false)}
              >
                {t('nav.home')}
              </Link>
              <Link
                to="/artisan/dashboard"
                className="text-gray-700 hover:text-blue-600 transition-colors px-2 py-1"
                onClick={() => setIsMenuOpen(false)}
              >
                {t('nav.dashboard')}
              </Link>
              <Link
                to="/cart"
                className="text-gray-700 hover:text-blue-600 transition-colors px-2 py-1 flex items-center"
                onClick={() => setIsMenuOpen(false)}
              >
                {t('nav.cart')} {itemCount > 0 && `(${itemCount})`}
              </Link>
              <div className="flex items-center space-x-2 pt-2 border-t">
                <button
                  onClick={toggleLanguage}
                  className="flex-1 p-2 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors"
                >
                  {i18n.language === 'es' ? 'English' : 'Español'}
                </button>
                <button
                  onClick={increaseFontSize}
                  className="p-2 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors"
                  title="A+"
                >
                  <Type size={20} />
                </button>
                <button
                  onClick={toggleHighContrast}
                  className={`p-2 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors ${
                    highContrast ? 'bg-gray-300' : ''
                  }`}
                >
                  <Contrast size={20} />
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
