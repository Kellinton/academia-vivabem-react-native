import React, { createContext, useState, useContext } from "react";

// Criação do contexto de navegação
const NavigationContext = createContext();

// Provedor do contexto de navegação
export const NavigationProvider = ({ children }) => {
  const [currentScreen, setCurrentScreen] = useState("Home");

  return (
    <NavigationContext.Provider value={{ currentScreen, setCurrentScreen }}>
      {children}
    </NavigationContext.Provider>
  );
};

// Hook para usar o contexto de navegação
export const useNavigation = () => {
  return useContext(NavigationContext);
};
