import React, { useState } from 'react';
import { ReactNode, createContext, useContext } from "react";

type ShopingCartProviderProps = {
    children: ReactNode;
}

type CartItem = {
    id: number;
    quantity: number;
}

type ShoppingCartContext = {
    getItemQuantity: (id: number) => number;
    increaseCartQuantity: (id: number) => void;
    decreaseCartQuantity: (id: number) => void;
    removeFromCart: (id: number) => void;
}

const ShoppingCartContext = createContext({} as ShoppingCartContext)

export const useShoppingCart = () => {
    return useContext(ShoppingCartContext)
}

export const ShoppingCartProvider = ({ children }: ShopingCartProviderProps) => {
    const [cartItems, setCartItems] = useState<CartItem[]>([])

    const getItemQuantity = (id: number) => {
        return cartItems.find(item => item.id === id)?.quantity || 0
    }

    const increaseCartQuantity = (id: number) => {
        setCartItems(items => {
            if (items.find(item => item.id === id) === null) {
                return [...items, { id, quantity: 1 }]
            } else {
                return items.map(item => {
                    if (item.id === id) {
                        return { ...item, quantity: item.quantity + 1 }
                    } else {
                        return item
                    }
                })
            }
        })
    }

    const decreaseCartQuantity = (id: number) => {
        setCartItems(items => {
            if (items.find(item => item.id === id)?.quantity === 1) {
                return items.filter(item => item.id !== id)
            } else {
                return items.map(item => {
                    if (item.id === id) {
                        return { ...item, quantity: item.quantity - 1 }
                    } else {
                        return item
                    }
                })
            }
        })
    }

    const removeFromCart = (id: number) => {
        setCartItems(items => {
            return items.filter(item => item.id !== id)
        })
    }

    return (
        <ShoppingCartContext.Provider value={{ getItemQuantity, increaseCartQuantity, decreaseCartQuantity, removeFromCart }}>
            {children}
        </ShoppingCartContext.Provider>
    )
}