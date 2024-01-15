import { createContext } from 'react';

const PortfolioContext = createContext(null);

export const PortfolioProvider = PortfolioContext.Provider;

export default PortfolioContext;
