import {createContext, CreateContext, useState} from 'react';
import { itemsInStock, getItemData} from './items';

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
    const [itemsInCart, setCartItems] = useState([]);

    function getItemQuantity(id)
    {
        const quantityInCart = itemsInCart.find(item => item.id === id)?.quantity

        if(quantityInCart === undefined)
        {
            return 0;
        }

        return quantityInCart;
    }

    function addItemToCart(id)
    {
        const quantityInCart = getItemQuantity(id)

        if(quantityInCart === 0)
        {
            setCartItems
            (
                [
                    ...itemsInCart, // take all the items in cart and put them to the front of this array
                    {
                        id: id,
                        quantityInCart: 1
                    }
                ]
            )
        } 
        else
        {
            setCartItems
            (
                itemsInCart.map
                (
                    item => item.id === id ? {...item, quantityInCart: item.quantityInCart + 1} : item
                )
            )
        }
    }

    function clearItemFromCart(id)
    {
        setCartItems
        (
            itemsInCart => itemsInCart.filter(currentItem => {return currentItem.id !== id;}) // if id param matches id in cart do not add to new cart array
        )
    }

    function removeItemfromCart(id)
    {
        const quantityInCart = getItemQuantity(id);
        if(quantityInCart === 1)
            {
                clearItemFromCart(id);
            }
            else
            {
                setCartItems
                (
                    itemsInCart.map
                    (
                        item => item.id === id ? {...item, quantityInCart: item.quantityInCart - 1} : item
                    )
                )
            }
    }

    function getTotalCost()
    {
        let totalCost = 0;
        itemsInCart.map((itemInCart) => 
        {
            const itemData = getItemData(itemInCart.id);
            totalCost += itemData.price * itemInCart.quantityInCart;
            return totalCost;
        });
        
    }

    const contextValue =
    {
        items:[],
        getItemQuantity,
        addItemToCart,
        removeItemfromCart,
        clearItemFromCart,
        getTotalCost
    }
    return(
        <CartContext.Provider value={contextValue}>
            {children}
        </CartContext.Provider>
    )
}
export default CartProvider;