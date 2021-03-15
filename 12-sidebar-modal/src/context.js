import React, { useState, useContext } from 'react'

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openSidebar = () => {
        setIsSidebarOpen(true);
    }

    const closeSidebar = () => {
        setIsSidebarOpen(false);
    }

    const openModal = () => {
        setIsModalOpen(true);
    }

    const closeModal = () => {
        setIsModalOpen(false);
    }

    // Wrap all the functions inside Provider
    return (
        <AppContext.Provider 
        value={{
            isSidebarOpen,
            isModalOpen,
            openSidebar,
            closeSidebar,
            openModal,
            closeModal
        }}>
            {children}
        </AppContext.Provider>
    );
};

// custom hook Use this hook no need to import useContext, AppContext in every component
// new custom hooks needs to start useXXXContext in order to work
export const useGlobalContext = () => {
    return useContext(AppContext);
}

export { AppContext, AppProvider };