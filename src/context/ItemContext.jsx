import React, { createContext, useState } from 'react';

const ItemContext = createContext();

const ItemProvider = ({ children }) => {
  const [white, setWhite] = useState();
  const [black, setBlack] = useState();
  const [red, setRed] = useState();
  const [green, setGreen] = useState();
  const [blue, setBlue] = useState();

  return (
    <ItemContext.Provider value={{ 
      white, setWhite,
      black, setBlack,
      red, setRed,
      green, setGreen,
      blue, setBlue
    }}>
      {children}
    </ItemContext.Provider>
  );
};

export { ItemContext, ItemProvider };
