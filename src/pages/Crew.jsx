import { useState, useEffect } from 'react'
import BackgroundImageDesktop from "../images/crew/background-crew-desktop.jpg"
import BackgroundImagePhone from "../images/crew/background-crew-mobile.jpg"
import { motion } from 'framer-motion'
import useContextApp from '../hooks/useContextApp' 


export default function Crew() {
    const { crew, currentCrew, setCurrentCrew} = useContextApp()
    const currentState = crew[currentCrew]

    function handleChangeState(e) {
        const newDestinyIndex = e.currentTarget.dataset.filter
        makeAnimation()
        setTimeout(() => {
            setCurrentCrew(newDestinyIndex)
        }, 200);
    }

    function makeAnimation() {
        const root = document.querySelector('.crew')
        root.style.setProperty('--opacity', "0")
        
        setTimeout(() => {
            root.style.setProperty('--opacity', "1")
        
        }, 600);
    }

    return (
        <div className='crew'>
            <img src={window.screen.width >= 782 ? BackgroundImageDesktop : BackgroundImagePhone} alt="background__image" className='background-image' />

            <motion.div
                initial={{ y: 100, opacity: 0 }}
                transition={
                    {
                        duration: .5,
                        type:"spring",
                        stiffness:50
                    }
                }
                animate={{ y: 0, opacity: 1 }}
                className="crew__box">
                <div className="crew__column">
                    <div className="crew__box-helper crew__box-helper--data">
                        <span className="crew__subtitle">
                            <span className="crew__index">
                                02
                            </span>
                            meet your crew
                        </span>

                        <div className="crew__information">
                            <span className="crew__job">
                                {currentState.role}
                            </span>
                            <h1 className="crew__title">
                                {currentState.name}
                            </h1>
                            <p className="crew__pharagraph">
                                {currentState.bio}
                            </p>
                        </div>

                        <ul className="crew__list">
                            {
                                items.map(({name}, i) => (
                                    <li className={`crew__item ${currentState.name === name && "crew__item--active"}`} key={name} data-filter={i} onClick={handleChangeState}></li>
                                ))
                            }
                        </ul>
                    </div>
                </div>

                <div className="crew__column">
                    <div className="crew__box-helper crew__box-helper--image">
                        <picture className="crew__picture">
                            <img src={currentState.image} alt="example image" className='crew__image'/>
                        </picture>
                    </div>
                </div>
            </motion.div>
        </div>
    )
}

const items = [
    {
        name: "Douglas Hurley"
    },
    {
        name: "Mark Shuttleworth"
    },
    {
        name: "Victor Glover"
    },
    {
        name: "Anousheh Ansari"
    },
]