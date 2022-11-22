import { motion } from 'framer-motion'
import BackgroundImageDesktop from "../images/technology/background-technology-desktop.jpg"
import BackgroundImagePhone from "../images/technology/background-technology-mobile.jpg"
import useContextApp from "../hooks/useContextApp"

export default function Technology() {
    const { technology, currentTechnology, setCurrentTechnology } = useContextApp()
    const currentState = technology[currentTechnology]


    function handleChangeState(e) {
        const newTechnologyIndex = e.currentTarget.dataset.filter
        makeAnimation()
        setTimeout(() => {
            setCurrentTechnology(newTechnologyIndex)

        }, 200);
    }

    function makeAnimation() {
        const root = document.querySelector('.technology')
        root.style.setProperty('--opacity', "0")

        setTimeout(() => {
            root.style.setProperty('--opacity', "1")
        }, 600);
    }

    return (
        <div className='technology'>
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
                className="technology__box">

                <div className="technology__column">
                    <div className="technology__subtitle">
                        <span className="technology__index">
                            03
                        </span>
                        space launch 101
                    </div>
                    <div className="technology__box-helper technology__box-helper--data">
                        <ul className="technology__list">
                            {
                                items.map(({ name }, i) => (
                                    <li key={name} className={`technology__item ${currentState.name === name && "technology__item--active"}`} onClick={handleChangeState} data-filter={i}>{i + 1}</li>
                                ))
                            }
                        </ul>

                        <div className="technology__information">
                            <div className="technology__subtitle-information">the terminology...</div>

                            <h1 className="technology__title">
                                {currentState.name}
                            </h1>
                            <p className="technology__pharagraph">
                                {currentState.description}
                            </p>
                        </div>
                    </div>
                </div>
                <div className="technology__column">
                    <div className="technology__box-helper
                    technology__box-helper--image">
                        <picture className="technology__picture">
                            <img src={currentState.image} alt="example image" className='technology__image' />
                        </picture>
                    </div>
                </div>
            </motion.div>
        </div>
    )
}

const items = [
    {
        name: "Launch vehicle"
    },
    {
        name: "Spaceport"
    },
    {
        name: "Space capsule"
    },
]