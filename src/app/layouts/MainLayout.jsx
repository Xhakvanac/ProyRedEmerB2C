import { Navbar } from '../../ui/components/navigation/Navbar';
import { Footer } from '../../ui/components/navigation/Footer';

export const MainLayout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 bg-gray-50">
        {children}
      </main>
      <Footer />
    </div>
  );
};
