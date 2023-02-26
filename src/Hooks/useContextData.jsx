import { useContext } from 'react'
import { contextData } from '../contexts/ContextDataProvider';

export const useContextData = () => {
  const context = useContext(contextData);
  return context
}
