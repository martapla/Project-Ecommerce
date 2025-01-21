import React, { createContext, ReactNode, useState } from 'react';
import { Product } from '../pages/checkout/CheckoutPage';

// Crear el contexto
export const ShoppingBagContext = createContext<any>(null); // TODO USE CORRECT TYPE


// Proveedor del contexto
export const ShoppingBagProvider = ({ children }: {children: ReactNode}) => {
  const [selectedProducts, setSelectedProducts] = useState<Product[]>([]);

  // Funciones para añadir y eliminar productos
  const addProduct = (product: Product) => {
    setSelectedProducts((prevProducts) => [...prevProducts, product]);
  };

  const removeProduct = (product: Product) => {
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
