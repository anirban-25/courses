import { View, Text } from 'react-native'
import React, { createContext, useContext } from 'react'
import StackNavigator from '../StackNavigator'
import { NavigationContainer } from '@react-navigation/native'
const AuthContext = createContext({})

export const AuthProvider = ({children}) => {
  return (
    <AuthContext.Provider
    value={{
        user: "anirban",
    }}>
    {children}
    </AuthContext.Provider>
  )
}

export default function useAuth(){
    return useContext(AuthContext);
}