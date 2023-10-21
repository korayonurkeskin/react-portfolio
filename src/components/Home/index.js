import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import AnimatedLetters from '../AnimatedLetters'
import LogoTitle from '../../assets/images/logo-k.png'
import './index.scss'
import Loader from 'react-loaders'
import SauderLogo from '../../assets/images/sauder-logo.png'

const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const nameArray = ['o', 'r', 'a', 'y', ',']
    const jobArray = ['a', ' ', 's', 'e', 'l', 'f', '-', 't', 'a', 'u', 'g', 'h', 't', ' ', 's', 'o', 'f', 't', 'w', 'a', 'r', 'e', ' ', 'd', 'e', 'v', 'e', 'l', 'o', 'p', 'e', 'r', '.']

    useEffect(() => {
        
        let timeoutId = setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 4000)
        
        return () => {
                    clearTimeout(timeoutId)
                }
    }, [])

    return (
        <>
            <div className="container home-page">
                <div className="text-zone">
                    <h1>
                    <span className={letterClass}>H</span>
                    <span className={`${letterClass} _12`}>i,</span>
                    <br />
                    <span className={`${letterClass} _13`}>I</span>
                    <span className={`${letterClass} _14`}>'m</span>
                    <img
                    src={LogoTitle}
                    alt="The first letter of my name, Koray."
                    />
                    <AnimatedLetters
                        letterClass={letterClass}
                        strArray={nameArray}
                        idx={15}
                    />
                    <br />
                    <AnimatedLetters
                        letterClass={letterClass}
                        strArray={jobArray}
                        idx={22}
                    />
                </h1>
                    <h2> <b>Education:</b> The University of British Columbia, Sauder School of Business </h2>
                    <h2> <b>Major:</b> Bachelor of Commerce, Business Technology Management </h2>
                    <Link to="/contact" className='flat-button'>CONTACT ME</Link>
                </div>
            </div>
            <Loader type="pacman" />
        </>
    )
}

export default Home