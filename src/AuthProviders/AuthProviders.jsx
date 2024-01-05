import React, { createContext, useEffect, useState } from 'react';
import app from '../firebase/firebase.config';
import {getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from 'firebase/auth';
export const AuthContext = createContext();
const auth = getAuth(app)
const AuthProviders = ({children}) => {
    const [loading,setLoading]= useState(true);
    const [user,setUser] = useState('');
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth,email,password);
    }
    const logIn = (email, password) => {
        return signInWithEmailAndPassword(auth,email,password);
    }
    const logOut = () =>{
        return signOut(auth);
    }
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth,(currentUser)=>{
            setUser(currentUser);
            setLoading(false);
            return ()=>{
                unsubscribe();
            }
        })
    },[])
    const authInfo = {
        user,
        createUser,
        logIn,
        logOut,
        loading
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProviders;