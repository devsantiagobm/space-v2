import { Link } from "react-router-dom"
import BackgroundImageDesktop from "../images/home/background-home-desktop.jpg"
import BackgroundImagePhone from "../images/home/background-home-mobile.jpg"
import { motion } from "framer-motion"

export default function Home() {
    return (
        <div className='home'>
            <img src={window.screen.width >= 782 ? BackgroundImageDesktop : BackgroundImagePhone} alt="background__image" className='background-image' />

            <motion.div 
            initial={ { y: 100, opacity: 0}}
            transition={
                {
                    duration: .5,
                    type:"spring",
                    stiffness:50
                }
            }
            
            animate={ { y: 0, opacity: 1}}
            className="home__box">
                <div className="home__column">
                    <div className="hero__box-helper">
                        <span className="home__subtitle">
                            So, you want to travel to
                        </span>
                        <h1 className='home__title'>Space</h1>
                        <p className="home__pharagraph">
                            Let's face it: if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we'll give you a truly out of this world experence!
                        </p>
                    </div>
                </div>

                <div className="home__column">
                    <Link to="/destination" className='home__button'>
                        Explore
                    </Link >
                </div>
            </motion.div>
        </div>
    )
}