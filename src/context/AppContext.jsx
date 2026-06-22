import { useContext, createContext, useState } from 'react';

const AppContext = createContext();
export const useApp = () => useContext(AppContext);

export function AppProvider({ children }) {
    const [theme, setTheme] = useState('light');
    const value = { theme, setTheme };

    return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}
