import React, { createContext, useContext, useState } from 'react';

const StateContext = createContext()

const initialState = {
  chat: false,
  cart: false,
  userProfile: false,
  notifications: false
}

export const ContextProvider = ({ children }) => {
  const [activeMenu, setActiveMenu] = useState(true);
  
  const [isClicked, setisClicked] = useState(initialState)

  return (
    <StateContext.Provider
      value={{ 
        activeMenu, // if k/v pair has same name: don't need activeMenu: activeMenu
        setActiveMenu,
        isClicked,
      }}
    >
      {children}

    </StateContext.Provider>
  )
}

export const useStateContext = () => useContext(StateContext);