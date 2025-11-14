import { Heart } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export const Footer = () => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-800 text-white mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Artesanías</h3>
            <p className="text-gray-300 text-sm">
              {t('home.subtitle')}
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Enlaces</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/" className="text-gray-300 hover:text-white transition-colors">
                  {t('nav.home')}
                </a>
              </li>
              <li>
                <a href="/artisan/dashboard" className="text-gray-300 hover:text-white transition-colors">
                  {t('nav.artisans')}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contacto</h3>
            <p className="text-gray-300 text-sm">
              Email: contacto@artesanias.com
            </p>
            <p className="text-gray-300 text-sm mt-2">
              Tel: +52 55 1234 5678
            </p>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-6 text-center text-sm text-gray-300">
          <p className="flex items-center justify-center gap-2">
            Hecho con <Heart size={16} className="text-red-500 fill-current" /> por artesanos mexicanos
          </p>
          <p className="mt-2">© {currentYear} Marketplace Artesanías. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};
