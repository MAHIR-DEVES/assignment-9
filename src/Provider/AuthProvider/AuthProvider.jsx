import { createContext } from 'react';
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
} from 'firebase/auth';
import app from '../../firebase/Firebase.config';

const auth = getAuth(app);

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  //
  const userRegister = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  //
  const userLogin = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const authData = {
    userRegister,
    userLogin,
  };

  return (
    <AuthContext.Provider value={authData}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
