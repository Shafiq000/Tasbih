import React from "react";
import AuthContextProvider from "./Navigations/AuthContext";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import AppStack from "./Navigations/AppStack";
export default function App() {

  return (
    <>
     <AuthContextProvider>
     <GestureHandlerRootView style={{flex:1}}>
      <StatusBar
        headerTintColor="white"
        backgroundColor="#fcba03"
        translucent={false}
      />
        <AppStack />
      </GestureHandlerRootView>
     </AuthContextProvider>
    </>
  );
}

