import { Link, useLocation } from "react-router-dom"
import { BiShapeCircle as GalaxyIcon } from "react-icons/bi"
import { GiHamburgerMenu as HamburguerIcon } from "react-icons/gi"
import { motion } from "framer-motion"
import { useState } from "react"

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation()
    const currentPath = location.pathname
    return (
        <header className='header'>
            <picture className="header__picture">
                <GalaxyIcon className="header__icon" />
            </picture>
            <motion.nav
                className="header__nav"
                animate={
                    window.screen.width <= 892 
                    ? isOpen    
                        ? { x: 0  }
                        : { x: 300  }
                    : ""} 
                    transition={{
                        duration: .4
                    }}>

                <ul className="header__list">
                    {
                        links.map(({ route, text, id }, i) => (
                            <li className={`header__item ${currentPath === route ? "header__item--active" : ""}`} key={id}>

                                <Link to={route} className="header__link">
                                    <span className="header__index">
                                        {"0" + i}
                                    </span>
                                    {text}
                                </Link>
                            </li>
                        ))
                    }
                </ul>
            </motion.nav>
            {
                window.screen.width <= 892 && <motion.div onClick={() => setIsOpen(!isOpen)}>
                    <HamburguerIcon className="header__hamburguer" />
                </motion.div>
            }
        </header>
    )
}

const links = [
    {
        route: "/",
        text: "home",
        id: "7281999265"
    },
    {
        route: "/destination",
        text: "destination",
        id: "8049707113"
    },
    {
        route: "/crew",
        text: "crew",
        id: "1694285322"
    },
    {
        route: "/technology",
        text: "technology",
        id: "7856601294"
    },
]