import { useCartContext } from '@/contexts/CartContext'
import { ProductInterface } from '@/api/getProducts'

const useCart = () => {
    const { addItemToCart, removeProduct, removeProductQnt } = useCartContext();

    const addProductToCart = (product: ProductInterface) => {
        addItemToCart(product)
    }

    const removeProductFromCart = (product: ProductInterface) => {
        removeProduct(product)
    }

    const removeProductQtdFromCart = (product: ProductInterface) =>{
        removeProductQnt(product)
    }

    return { addProductToCart, removeProductFromCart, removeProductQtdFromCart }
}

export default useCart