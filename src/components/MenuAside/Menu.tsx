import CartCard from "./CartCard";
import styles from "./styles.module.scss";
import { MouseEventHandler } from "react";
import { useCartContext } from "@/contexts/CartContext";
import { AnimatePresence, motion } from "framer-motion";

interface MenuProps {
    visible: boolean
    toggleMenu: MouseEventHandler<HTMLButtonElement>
}


const Menu: React.FC<MenuProps> = ({visible, toggleMenu}) => {

    const {cart} = useCartContext()

    const cartTotal =  cart.reduce((total, product) => total + (+product.price * product.quantity), 0)
    const formattedTotal = cartTotal.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })

    return(
        <AnimatePresence>
            {visible &&(
                <motion.div 
                    className={`${styles.menuAside} ${visible ? styles.showMenu : styles.hideMenu}`}
                    initial={{opacity:0, x: 100}}
                    whileInView={{opacity: 1, x: 0}} 
                    exit={{opacity: 0, x: 100}} 
                    transition={{duration: 0.4}}
                >
                    <div className={styles.menuAside__content}>
                        <div>
                            <div className={styles.menuAside__header}>
                                <h1>Carrinho de compras</h1>
                                <button 
                                    className={styles.menuAside__close}
                                    onClick={toggleMenu}>
                                X
                                </button>
                            </div>
                            {cart.length > 0 ? (
                                cart.map(product => (
                                    <CartCard 
                                        key={product.id}
                                        product={product}
                                    />
                                ))
                            ) : (
                                <p style={{color: "#fff"}}>Seu carrinho está vazio.</p>
                            )}

                        </div>
                        <div className={styles.menuAside__total}>
                            <p>Total</p>
                            <p>{formattedTotal}</p>
                        </div>
                    </div>
                    <button className={styles.menuAside__button}>
                        Finalizar Compra
                    </button>
                </motion.div>
            )}
        </AnimatePresence>
    )
}


export default Menu