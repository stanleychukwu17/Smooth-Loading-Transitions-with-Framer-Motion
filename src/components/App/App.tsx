import ExpComp from '../Exp/ExpComp';
import './app.scss';
// import { motion } from 'framer-motion';
// import { gsap } from 'gsap';
/**
    * https://huemint.com/brand-intersection/#palette=fffefc-2d448d-8a83e2-b69551
    * https://huemint.com/brand-intersection/#palette=721b4e-e5e5d7-6a97a6-323541
    * https://huemint.com/brand-intersection/#palette=0a050a-d7cecf-ab7655-5a2020
    * https://huemint.com/brand-intersection/#palette=f295bb-093e6e-758b90-f8fbfb
*/
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
                    <div className="DtsBig">brand</div>
                    <div className="">
                        We are specialized
                    </div>
                </div>
                <div className="DtsExpCvr">
                    <ExpComp />
                    <ExpComp />
                </div>
                <div className="DtsBig DtsStudio">studio</div>
            </div>
            <div className="scrollDown">
                <div className="">Scroll</div>
                <div className="">Down</div>
            </div>
        </div>
    )
}
export default App;