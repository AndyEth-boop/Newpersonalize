import React, { createContext, useContext, useReducer, useEffect } from 'react';
import { AuthState, User } from '../types';

// Initial auth state
const initialState: AuthState = {
  user: null,
  isAuthenticated: false,
  isLoading: true,
  error: null,
};

// Auth action types
type AuthAction =
  | { type: 'LOGIN_START' }
  | { type: 'LOGIN_SUCCESS'; payload: User }
  | { type: 'LOGIN_FAILURE'; payload: string }
  | { type: 'SIGNUP_START' }
  | { type: 'SIGNUP_SUCCESS'; payload: User }
  | { type: 'SIGNUP_FAILURE'; payload: string }
  | { type: 'LOGOUT' };

// Auth reducer
const authReducer = (state: AuthState, action: AuthAction): AuthState => {
  switch (action.type) {
    case 'LOGIN_START':
    case 'SIGNUP_START':
      return { ...state, isLoading: true, error: null };
    case 'LOGIN_SUCCESS':
    case 'SIGNUP_SUCCESS':
      return {
        ...state,
        isLoading: false,
        isAuthenticated: true,
        user: action.payload,
        error: null,
      };
    case 'LOGIN_FAILURE':
    case 'SIGNUP_FAILURE':
      return {
        ...state,
        isLoading: false,
        isAuthenticated: false,
        user: null,
        error: action.payload,
      };
    case 'LOGOUT':
      return {
        ...state,
        isAuthenticated: false,
        user: null,
      };
    default:
      return state;
  }
};

// Auth context
interface AuthContextProps {
  state: AuthState;
  login: (email: string, password: string) => Promise<void>;
  signup: (name: string, email: string, password: string) => Promise<void>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

// Auth provider component
export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, initialState);

  // Check if user is already logged in
  useEffect(() => {
    const checkAuth = async () => {
      try {
        const userData = localStorage.getItem('user');
        
        if (userData) {
          const user = JSON.parse(userData) as User;
          dispatch({ type: 'LOGIN_SUCCESS', payload: user });
        } else {
          dispatch({ type: 'LOGIN_FAILURE', payload: 'No user logged in' });
        }
      } catch (error) {
        dispatch({ type: 'LOGIN_FAILURE', payload: 'Failed to authenticate' });
      }
    };
    
    checkAuth();
  }, []);

  // Login function
  const login = async (email: string, password: string) => {
    dispatch({ type: 'LOGIN_START' });
    
    try {
      // In a real app, this would be an API call
      // Simulating API call delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Sample user data (would come from API in real app)
      const user: User = {
        id: '1',
        email,
        name: email.split('@')[0],
        profilePicture: 'https://randomuser.me/api/portraits/women/44.jpg',
        createdAt: new Date(),
      };
      
      // Save user to localStorage for persistence
      localStorage.setItem('user', JSON.stringify(user));
      
      dispatch({ type: 'LOGIN_SUCCESS', payload: user });
    } catch (error) {
      dispatch({ type: 'LOGIN_FAILURE', payload: 'Invalid email or password' });
    }
  };

  // Signup function
  const signup = async (name: string, email: string, password: string) => {
    dispatch({ type: 'SIGNUP_START' });
    
    try {
      // In a real app, this would be an API call
      // Simulating API call delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Sample user data (would come from API in real app)
      const user: User = {
        id: '1',
        email,
        name,
        profilePicture: 'https://randomuser.me/api/portraits/women/44.jpg',
        createdAt: new Date(),
      };
      
      // Save user to localStorage for persistence
      localStorage.setItem('user', JSON.stringify(user));
      
      dispatch({ type: 'SIGNUP_SUCCESS', payload: user });
    } catch (error) {
      dispatch({ type: 'SIGNUP_FAILURE', payload: 'Failed to create account' });
    }
  };

  // Logout function
  const logout = () => {
    localStorage.removeItem('user');
    dispatch({ type: 'LOGOUT' });
  };

  return (
    <AuthContext.Provider value={{ state, login, signup, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook to use auth context
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};