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
    orderTimer: string;
    shopTable: number;
    orderShop: boolean;
}

type ShoppingCartContext = {
    getItemQuantity: (id: number) => number;
    increaseCartQuantity: (id: number, storeCategory: string) => void;
    decreaseCartQuantity: (id: number, storeCategory: string) => void;
    removeFromCart: (id: number, storeCategory: string) => void;
    category:string;
    cartQuantity: number;
    cartItems: CartItem[];
    inLocationShopping: () => void;
    takeAwayShopping: () => void;
    atLocation: boolean;
    openOrderShopping: () => void;
    closeOrderShopping: (id: number) => void;
    orderShop: boolean;
    orderTimer: string;
    settingTimeOrder: () => void;
    settingOrderTable: (id:number, table: number) => void;
    shopTable: number;
}

const ShoppingCartContext = createContext({} as ShoppingCartContext)

export function useShoppingCart() {
    return useContext(ShoppingCartContext)
}

export function ShoppingCartProvider({ children }: ShopingCartProviderProps) {

    const [orderShop, setOrderShop] = useState<boolean>(false);
    const [atLocation, setAtLocation] = useState<boolean>(false);
    const [category, setCategory] = useState<string>('');
    const [cartItems, setCartItems] = useLocalStorage<CartItem[]>('shoping-cart', [])
    const orderTime = new Date();
    const parseTime = orderTime.toJSON();
    const [orderTimer, setOrderTimer] = useState<string>(parseTime);
    const [shopTable, setShopTable] = useState<number>(0);



    const cartQuantity = cartItems.reduce((quantity, item) => item.quantity + quantity, 0);
    const inLocationShopping = () => setAtLocation(true);
    const takeAwayShopping = () => setAtLocation(false);

    const settingTimeOrder = () => setOrderTimer(() => parseTime);
    const settingOrderTable = (table:number) => setShopTable(table);


    const openOrderShopping = () => setOrderShop(true);
    function closeOrderShopping(id: number) {
        return cartItems.find(item => item.id === id)?.orderShop || false;
    }

    function getItemQuantity(id: number) {
        return cartItems.find(item => item.id === id)?.quantity || 0;
    }

    function increaseCartQuantity(id: number, storeCategory: string) {
        setCategory(storeCategory);
        setCartItems(currItems => {
            if (currItems.find(item => item.id === id) === undefined) {
                return [...currItems, { id, quantity: 1, storeCategory, atLocation, orderShop, orderTimer, shopTable }]
            } else {
                return currItems.map(item => {
                    if (item.id === id) {
                        return { ...item, quantity: item.quantity + 1, storeCategory, atLocation, orderShop, orderTimer, shopTable }
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
                        return { ...item, quantity: item.quantity - 1, storeCategory, atLocation, orderShop, orderTimer, shopTable }
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
            category,
            cartQuantity,
            cartItems,
            inLocationShopping,
            takeAwayShopping,
            atLocation,
            openOrderShopping,
            closeOrderShopping,
            orderShop,
            orderTimer,
            settingTimeOrder,
            settingOrderTable,
            shopTable
        }}>
            {children}
        </ShoppingCartContext.Provider>
    )
}