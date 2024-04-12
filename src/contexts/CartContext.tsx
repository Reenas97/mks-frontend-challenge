"use client"
import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react'
import { ProductInterface } from '@/api/getProducts'

interface ProductWithQuantity extends ProductInterface {
  quantity: number
}

interface CartContextType {
  cart: ProductWithQuantity[];
  addItemToCart: (item: ProductInterface) => void
  removeProduct: (item: ProductInterface) => void
  removeProductQnt: (item: ProductInterface) => void
}

const CartContext = createContext<CartContextType | undefined>(undefined)

export const useCartContext = () => {
  const context = useContext(CartContext)
  if (!context) {
    throw new Error('useCartContext precisa ser usado dentro do CartProvider')
  }
  return context
}

interface CartProviderProps {
  children: ReactNode
}

export const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
  const [cart, setCart] = useState<ProductWithQuantity[]>([])

  useEffect(() => {
    const storedCart = localStorage.getItem('shopping-cart')

    if (storedCart) {
      setCart(JSON.parse(storedCart))
    }
  }, [])

    const addItemToCart = (item: ProductInterface) => {
      const productIndex = cart.findIndex(product => product.id === item.id)
      if (productIndex !== -1) {
        const updatedCart = [...cart]
        updatedCart[productIndex].quantity += 1
        setCart(updatedCart)
        localStorage.setItem('shopping-cart', JSON.stringify(updatedCart))
      } else {
        const updatedCart = [...cart, { ...item, quantity: 1 }]
        setCart(updatedCart)
        localStorage.setItem('shopping-cart', JSON.stringify(updatedCart))
      }
    }

    const removeProductQnt = (item: ProductInterface) =>{
        const productIndex = cart.findIndex(product => product.id === item.id) 

        if (productIndex !== -1) {
            const updatedCart = [...cart]
            if(updatedCart[productIndex].quantity > 1){
                updatedCart[productIndex].quantity -= 1
            } else{
                updatedCart.splice(productIndex, 1)
            }

            setCart(updatedCart)
            localStorage.setItem('shopping-cart', JSON.stringify(updatedCart))
        }
    }

    const removeProduct = (item: ProductInterface) => {
        const productIndex = cart.findIndex(product => product.id === item.id) 

        if (productIndex !== -1) {
          const updatedCart = [...cart]
          updatedCart.splice(productIndex, 1)
          localStorage.setItem('shopping-cart', JSON.stringify(updatedCart))
          setCart(updatedCart)
        }
    }

    return (
        <CartContext.Provider value={{ cart, addItemToCart, removeProduct, removeProductQnt }}>
            {children}
        </CartContext.Provider>
    )
}

