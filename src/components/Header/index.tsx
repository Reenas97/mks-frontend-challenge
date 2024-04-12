"use client"

import Link from "next/link";
import Image from "next/image";
import iconCart from "../../../public/images/icon-cart.png"
import Menu from "@/components/MenuAside/Menu";
import useCloseMenu from "@/hooks/useMenu";
import { useCartContext } from "@/contexts/CartContext";

export default function Header(){
    
  const [isMenuVisible, toggleMenu] = useCloseMenu()
  const {cart} = useCartContext()

  const totalItemsInCart = cart.reduce((total, product) => total + product.quantity, 0)

  return(
      <header>
          <div className="container--sm">
              <div className="header__content">
                <Link href="/" className="navbrand">
                  <span>MKS</span>
                  Sistemas
                </Link>
                <button className="header__cart" onClick={toggleMenu}>
                  <Image 
                    src={iconCart}
                    alt="Carrinho"
                    height={19}
                    width={18}
                    style={{width: "19px", height: "auto"}}
                    priority
                  />
                  {totalItemsInCart}
                </button>
              </div>
          </div>
          <Menu visible={isMenuVisible} toggleMenu={toggleMenu} />
    </header>
  )
}