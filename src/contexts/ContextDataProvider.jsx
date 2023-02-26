import { createContext, useContext, useState } from "react";



export const contextData = createContext();


export const ContextDataProvider = ({ children }) => {

  const [selectedProvider, setSelectedProvider] = useState(0);
  const [popularTvProviders, setPopularTvProviders] = useState([]);

  const value = { 
    selectedProvider,
    setSelectedProvider,
    popularTvProviders,
    setPopularTvProviders
  };

  return <contextData.Provider value={value}>{children}</contextData.Provider>;
};

