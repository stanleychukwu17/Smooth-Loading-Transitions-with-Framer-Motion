import './app.scss';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';

const App = () => {

    return (
        <div className="AppMain">
            <header className='hdrCvr'>
                <div className="hdrLogo">STANLEY</div>
                <div className="hdrItems">
                    <div className="">Design</div>
                    <div className="">Strategy</div>
                    <div className="">Cases</div>
                    <div className="">About</div>
                    <div className="">why work with us?</div>
                </div>
                <div className="hdrWrkUs">Let's work together</div>
            </header>
            <div className="DtsMidCvr">
                <div className="">
                    <div className="DtsBig">Brand</div>
                    <div className="">write up</div>
                </div>
                <div className="DtsBig">Experience</div>
                <div className="DtsBig">Studio</div>
            </div>
        </div>
    )
}
export default App;