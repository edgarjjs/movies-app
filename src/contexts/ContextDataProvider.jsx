import { createContext, useState } from "react";



export const contextData = createContext();


export const ContextDataProvider = ({ children }) => {

  const [selectedProvider, setSelectedProvider] = useState(0);
  const [popularTvProviders, setPopularTvProviders] = useState([]);
  const [activeSearch, setActiveSearch] = useState(false)

  const value = { 
    selectedProvider,
    setSelectedProvider,
    popularTvProviders,
    setPopularTvProviders,
    activeSearch,
    setActiveSearch
  };

  return <contextData.Provider value={value}>{children}</contextData.Provider>;
};

