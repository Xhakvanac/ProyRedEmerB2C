import { useAuth as useAuthContext } from '../../core/context/AuthContext';

export const useAuth = () => {
  return useAuthContext();
};
