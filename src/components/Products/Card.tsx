import { ProductInterface } from "@/api/getProducts";
import styles from "./styles.module.scss"
import Image from "next/image";
import shoppingIcon from "../../../public/images/icon-shopping-bag.png"
import useCart from "@/hooks/useCart";

interface ProductCardProps {
    product: ProductInterface
}

const Card: React.FC<ProductCardProps> = ({product}) => {

    const {addProductToCart} = useCart()

    if(!product){
        return <h1>Ainda não há produtos cadastrados</h1>
    }

    return (
        <div className={styles.card}>
            <div className={styles.card__infos}>
                <div className={styles.card__img}>
                    {product.photo &&(
                        <Image 
                        src={product.photo}
                        alt={product.name}
                        height={132}
                        width={120}
                        priority
                    />
                    )}
                </div>
                <div className={styles.card__title_price}>
                    <h2>{product.name}</h2>
                    <p>{`R$ ${parseFloat(product.price)}`}</p>
                </div>
                <p className={styles.card__description}>{product.description}</p>
            </div>
            <button 
                className={styles.card__btn}
                onClick={() => addProductToCart(product)}
            >
                <Image 
                    src={shoppingIcon}
                    alt={product.name}
                    height={12}
                    width={13}
                    style={{width: "12px", height: "auto"}}
                    priority
                />
                Comprar
            </button>
        </div>
    );
};

export default Card;