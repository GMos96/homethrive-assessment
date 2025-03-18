import { AuthContext, AuthDispatchContext } from '@/core/context/auth.context';
import { type ReactNode, useEffect, useReducer } from 'react';

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [isAuthenticated, dispatch] = useReducer(handleAuthentication, false);

  useEffect(() => {
    const token = localStorage.getItem('auth-token');
    dispatch(token !== null);
  }, []);

  function handleAuthentication(state: boolean, newState: boolean): boolean {
    if (!newState) {
      localStorage.removeItem('auth-token');
    }
    return newState;
  }

  return (
    <AuthContext.Provider value={isAuthenticated}>
      <AuthDispatchContext.Provider value={dispatch}>
        {children}
      </AuthDispatchContext.Provider>
    </AuthContext.Provider>
  );
};
