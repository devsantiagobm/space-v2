import BackgroundImageDesktop from "../images/destination/background-destination-desktop.jpg"
import BackgroundImagePhone from "../images/destination/background-destination-mobile.jpg"
import { motion } from "framer-motion"
import useContextApp from "../hooks/useContextApp"

export default function Destination() {
    const { destinations, currentDestination, setCurrentDestination } = useContextApp()
    const currentState = destinations[currentDestination]

    function handleChangeState(e) {
        const newDestinyIndex = e.currentTarget.dataset.filter
        makeAnimation()
        setTimeout(() => {
            setCurrentDestination(newDestinyIndex)
        }, 200);

    }

    function makeAnimation() {
        const root = document.querySelector('.destination')
        root.style.setProperty('--opacity', "0")

        setTimeout(() => {
            root.style.setProperty('--opacity', "1")
        }, 600);
    }

    return (
        <div className='destination'>
            <img src={window.screen.width >= 782 ? BackgroundImageDesktop : BackgroundImagePhone} alt="background__image" className='background-image' />

            <motion.div
                initial={{ y: 100, opacity: 0 }}
                transition={
                    {
                        duration: .5,
                        type: "spring",
                        stiffness: 50
                    }
                }
                animate={{ y: 0, opacity: 1 }}
                className="destination__box">
                <div className="destination__column">
                    <div className="destination__box-helper destination__box-helper--image">
                        <div className="destination__subtitle">
                            <span className="destination__index">
                                01
                            </span>
                            pick your destination
                        </div>
                        <picture className="destination__picture">
                            <img src={currentState.image} alt="Planet image" className="destination__image" />
                        </picture>
                    </div>
                </div>
                <div className="destination__column">
                    <div className="destination__box-helper destination__box-helper--data">
                        <ul className="destination__list">
                            {
                                planets.map(({ name }, i) => (
                                    <li key={name} className={`destination__item ${currentState.name === name && "destination__item--active"}`} onClick={handleChangeState} data-filter={i}>
                                        {name}
                                    </li>
                                ))
                            }
                        </ul>
                        <h1 className="destination__title">
                            {
                                currentState.name
                            }
                        </h1>
                        <p className="destination__pharagraph">
                            {currentState.description}
                        </p>
                        <hr className="destination__divider" />

                        <div className="destination__data">
                            <div className="destination__data-column">
                                <span className="destination__data-subtitle">
                                    avg. distance
                                </span>
                                {currentState.distance}
                            </div>

                            <div className="destination__data-column">
                                <span className="destination__data-subtitle">
                                    est. travel time
                                </span>
                                {currentState.travel}
                            </div>
                        </div>
                    </div>


                </div>
            </motion.div>
        </div>
    )
}

const planets = [
    {
        name: "Moon"
    },
    {
        name: "Mars"
    },
    {
        name: "Europa"
    },
    {
        name: "Titan"
    }
]