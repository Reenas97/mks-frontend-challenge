import { ProductInterface } from "@/api/getProducts";
import styles from "./styles.module.scss";
import Image from "next/image";
import useCart from "@/hooks/useCart";

interface CartCardProps{
    product: ProductInterface
}

const CartCard: React.FC<CartCardProps> = ({product}) => {
    const {addProductToCart, removeProductFromCart, removeProductQtdFromCart} = useCart()

    const quantity = product.quantity !== undefined ? product.quantity : 0
    return(
        <div className={styles.cartCard} key={product.id}>
            <div className={styles.cartCard__photo_name}>
                {product.photo && ( 
                    <Image
                        src={product.photo}
                        alt={product.name}
                        height={86}
                        width={117}
                        priority
                    />
                )}
                <h2>{product.name}</h2>
            </div>
            <div className={`${styles.cartCard__qntd} ${styles.menuCard__hideMobile}`}>
                <p>Qtd.</p>
                <div className={styles.cartCard__qntd__count}>
                    <button
                        onClick={() => removeProductQtdFromCart(product)}
                    >
                        -
                    </button>
                    <p>{quantity}</p>
                    <button
                        onClick={() => addProductToCart(product)}
                    >
                        +
                    </button>
                </div>
            </div>
            <div className={`${styles.cartCard_qntd_price} ${styles.cartCard__hideDesktop}`}>
                <div className={styles.cartCard__qntd}>
                    <p className={styles.cartCard__qntd__txt}>Qtd.</p>
                    <div className={styles.cartCard__qntd__count}>
                        <button
                            onClick={() => removeProductQtdFromCart(product)}
                        >
                            -
                        </button>
                        <p>{quantity}</p>
                        <button
                            onClick={() => addProductToCart(product)}
                        >
                            +
                        </button>
                    </div>
                </div>
                <p className={styles.menuCard__mobileTotal}>{(parseFloat(product.price) * quantity).toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</p>
            </div>
            <p className={styles.menuCard__hideMobile}>{(parseFloat(product.price) * quantity).toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</p>
            <button 
                className={`${styles.menuAside__close} ${styles.menuAside__close_smaller}`}
                onClick={() => removeProductFromCart(product)}
                >
                    X
            </button>
        </div>
    )
}

export default CartCard;