import { useState, MouseEventHandler } from "react";

const useMenu = (): [boolean, MouseEventHandler<HTMLButtonElement>] => {
    const [isMenuVisible, setIsMenuVisible] = useState(false)

    const toggleMenu = () => {
        setIsMenuVisible(!isMenuVisible);
    }

    return [isMenuVisible, toggleMenu]
}

export default useMenu
