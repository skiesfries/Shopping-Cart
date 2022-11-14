import {createContext, CreateContext, useState} from 'react';
import { itemsInStock} from './items';

export const CartContext = createContext({
    items:[],
    getItemQuantity: () => {},
    addItemToCart: () => {},
    removeItemfromCart: () => {},
    clearCart: () => {},
    getTotalCost: () => {}

});

export function CartProvider({children})
{
    const contextValue =
    {
        items:[],
        getItemQuantity,
        addItemToCart,
        removeItemfromCart,
        clearCart,
        getTotalCost
    }
    return(
        <CartContext.Provider value={contextValue}>
            {children}
        </CartContext.Provider>
    )
}