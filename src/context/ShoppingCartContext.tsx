import React, { useState } from 'react';
import { ReactNode, createContext, useContext } from "react";
import { useLocalStorage } from '../hook/useLocalStorage';

type ShopingCartProviderProps = {
    children: ReactNode;
}

type CartItem = {
    id: number;
    quantity: number;
    storeCategory: string;
    atLocation: boolean;
}

type ShoppingCartContext = {
    getItemQuantity: (id: number) => number;
    increaseCartQuantity: (id: number, storeCategory: string) => void;
    decreaseCartQuantity: (id: number, storeCategory: string) => void;
    removeFromCart: (id: number, storeCategory: string) => void;
    cartQuantity: number;
    cartItems: CartItem[];
    inLocationShopping: () => void;
    takeAwayShopping: () => void;
    atLocation: boolean;
    finishShopping: () => void;
    finishShopingInfo: boolean;
}

const ShoppingCartContext = createContext({} as ShoppingCartContext)

export function useShoppingCart() {
    return useContext(ShoppingCartContext)
}

export function ShoppingCartProvider({ children }: ShopingCartProviderProps) {

    const [finishShopingInfo, setFinishShopingInfo] = useState<boolean>(false);
    const [atLocation, setAtLocation] = useState<boolean>(false);
    const [cartItems, setCartItems] = useLocalStorage<CartItem[]>('shoping-cart', [])

    const cartQuantity = cartItems.reduce((quantity, item) => item.quantity + quantity, 0);
    const inLocationShopping = () => setAtLocation(true);
    const takeAwayShopping = () => setAtLocation(false);
    const finishShopping = () => setFinishShopingInfo(true);

    function getItemQuantity(id: number) {
        return cartItems.find(item => item.id === id)?.quantity || 0;
    }

    function increaseCartQuantity(id: number, storeCategory: string) {
        setCartItems(currItems => {
            if (currItems.find(item => item.id === id) === undefined) {
                return [...currItems, { id, quantity: 1, storeCategory, atLocation, finishShopingInfo }]
            } else {
                return currItems.map(item => {
                    if (item.id === id) {
                        return { ...item, quantity: item.quantity + 1, storeCategory, atLocation, finishShopingInfo}
                    } else {
                        return item;
                    }
                })
            }
        })
    }

    function decreaseCartQuantity(id: number, storeCategory: string) {
        setCartItems(items => {
            if (items.find(item => item.id === id)?.quantity === 1) {
                return items.filter(item => item.id !== id)
            } else {
                return items.map(item => {
                    if (item.id === id) {
                        return { ...item, quantity: item.quantity - 1, storeCategory, atLocation, finishShopingInfo}
                    } else {
                        return item
                    }
                })
            }
        })
    }

    function removeFromCart(id: number) {
        setCartItems(items => {
            return items.filter(item => item.id !== id)
        })
    }

    return (
        <ShoppingCartContext.Provider value={{
            getItemQuantity,
            increaseCartQuantity,
            decreaseCartQuantity,
            removeFromCart,
            cartQuantity,
            cartItems,
            inLocationShopping,
            takeAwayShopping,
            atLocation,
            finishShopping,
            finishShopingInfo
        }}>
            {children}
        </ShoppingCartContext.Provider>
    )
}