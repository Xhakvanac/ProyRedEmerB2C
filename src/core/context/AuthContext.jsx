import { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const storedUser = localStorage.getItem('mock_user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    setLoading(false);
  }, []);

  const login = async (email, password) => {
    const mockUser = {
      id: 'user-1',
      email,
      name: 'Usuario Demo',
      role: 'customer'
    };
    localStorage.setItem('mock_user', JSON.stringify(mockUser));
    localStorage.setItem('auth_token', 'mock_token_12345');
    setUser(mockUser);
    return mockUser;
  };

  const loginArtisan = () => {
    const mockArtisan = {
      id: 'art-1',
      email: 'maria@example.com',
      name: 'María González',
      role: 'artisan'
    };
    localStorage.setItem('mock_user', JSON.stringify(mockArtisan));
    localStorage.setItem('auth_token', 'mock_token_artisan');
    setUser(mockArtisan);
    return mockArtisan;
  };

  const logout = () => {
    localStorage.removeItem('mock_user');
    localStorage.removeItem('auth_token');
    setUser(null);
  };

  const isAuthenticated = !!user;
  const isArtisan = user?.role === 'artisan';

  return (
    <AuthContext.Provider value={{
      user,
      loading,
      login,
      loginArtisan,
      logout,
      isAuthenticated,
      isArtisan
    }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within AuthProvider');
  }
  return context;
};
