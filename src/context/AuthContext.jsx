'use client';
import React, { createContext, useContext, useEffect, useState } from 'react';
import {
  onAuthStateChanged,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  signInWithPopup,
  updateProfile,
} from 'firebase/auth';

import { auth, googleProvider } from '@/app/firebase/config';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, currentUser => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  // Login
  const login = (email, password) =>
    signInWithEmailAndPassword(auth, email, password);

  // Register
  const register = (email, password) =>
    createUserWithEmailAndPassword(auth, email, password);

  // Google Login
  const googleLogin = () => signInWithPopup(auth, googleProvider);

  // Logout
  const logout = () => signOut(auth);

  // ⭐ Update User Profile (FULL FIX)
  const updateUserProfile = async (fullName, photoURL) => {
    if (!auth.currentUser) return;

    await updateProfile(auth.currentUser, {
      displayName: fullName,
      photoURL: photoURL,
    });

    // Update local state
    setUser({
      ...auth.currentUser,
      displayName: fullName,
      photoURL: photoURL,
    });
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        login,
        register,
        googleLogin,
        logout,
        updateUserProfile,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
export const useAuth = () => useContext(AuthContext);
