import React, { createContext, useState } from 'react';

// Crear el contexto
export const ShoppingBagContext = createContext();

// Proveedor del contexto
export const ShoppingBagProvider = ({ children }) => {
  const [selectedProducts, setSelectedProducts] = useState([]);

  // Funciones para añadir y eliminar productos
  const addProduct = (product) => {
    setSelectedProducts((prevProducts) => [...prevProducts, product]);
  };

  const removeProduct = (product) => {
    setSelectedProducts((prevProducts) =>
      prevProducts.filter((p) => p.name !== product.name)
    );
  };

  return (
    <ShoppingBagContext.Provider value={{ selectedProducts, addProduct, removeProduct }}>
      {children}
    </ShoppingBagContext.Provider>
  );
};
