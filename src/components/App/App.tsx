import { useEffect, } from 'react';
import { motion, useMotionValue, useScroll, useSpring, useTransform } from 'framer-motion';
import { gsap } from 'gsap';
import {usePin} from '../../hooks/usePin'

import ExpComp from '../Exp/ExpComp';
import EchText from '../EchText/EchText';

import './app.scss';

import { exp, exp_2, fChildren, fImgCvr, headerVariant, scrollDown_1, scrollDown_2 } from './AppVariants';

/**
    * https://huemint.com/brand-intersection/#palette=fffefc-2d448d-8a83e2-b69551
    * https://huemint.com/brand-intersection/#palette=721b4e-e5e5d7-6a97a6-323541
    * https://huemint.com/brand-intersection/#palette=0a050a-d7cecf-ab7655-5a2020
    * https://huemint.com/brand-intersection/#palette=f295bb-093e6e-758b90-f8fbfb
*/

import p1 from '../../assets/images/p1.jpg'
import p2 from '../../assets/images/p2.jpg'
import p3 from '../../assets/images/p3.jpg'
import p4 from '../../assets/images/p4.jpg'
import p5 from '../../assets/images/p5.jpg'

const App = () => {
    const {scrollY} = useScroll()
    const mid_Y = useMotionValue(0)
    usePin({
        'itemToUpdate':mid_Y,
        'distanceFromTop':83, // to get the distance of the element from the top, const item = document.querySelector('div.DtsMidCvr'); const offset = item?.getBoundingClientRect(); console.log(offset.y or offset.top)
        'distanceToPin': 2000,
    })

    // back ground color changes on scroll
    // const bgColor = useTransform(scrollY, [0 , 700], ['#fffefc', '#000000'])
    const padLeft = useTransform(scrollY, [0 , 1100], ['50%', '0%'])

    // side text fade away on scrolling down
    const txtY = useSpring(useTransform(scrollY, [0 , 300], [0, -100]))
    const txtOpacity = useTransform(scrollY, [0 , 300], [1, 0])

    // for scrolling down roll away from the scene
    const rollRotate = useTransform(scrollY, [0 , 1000], [0, -360])
    const rollX = useTransform(scrollY, [0 , 1000], [0, -200])

    // for the large image
    // const bigImgY = useTransform(scrollY, [0 , 2500], [0, 1000])
    // const bigImgScale = useTransform(scrollY, [1000 , 2500], [2.27, 0])






    // the bellow useEffect is used for gsap animations
    useEffect(() => {
        // on page load, we stop the 'body' from overflowing. we also scroll the 'body' to the top so the animation is visible
        const body = document.querySelector('body') as Element
        body.classList.add('bodyStopOverflow')

        gsap.to('.gsap2, .gsap3, .gsap4, .gsap5', {y:30, opacity:0, delay:3.2, stagger: .3, duration: .5})
        gsap.to('.gsap1', {
            scale:2.27, x:15, delay:4, duration: .8,
            onComplete: () => { body.classList.remove('bodyStopOverflow') } // allow 'body to now overFlow
        })
    }, [])


    return (
        <div className="AppMain">
            <motion.header variants={headerVariant} custom={1} initial='initial' animate='animate' className='hdrCvr'>
                <div className="hdrLogo">STANLEY</div>
                <div className="hdrItems">
                    <div className="">Design</div>
                    <div className="">Strategy</div>
                    <div className="">Cases</div>
                    <div className="">About</div>
                    <div className="">why work with us?</div>
                </div>
                <div className="hdrWrkUs">Let's work together</div>
            </motion.header>
            <motion.div className="DtsMidCvr" style={{y:mid_Y}}>
                <div className="DtsTopHt">
                    <div className="DtsBig">
                        <EchText text='branding' />
                    </div>
                    <motion.div variants={headerVariant} custom={1.15} initial='initial' animate='animate' className="DtsWriteUp" style={{opacity: txtOpacity, y: txtY}}>
                        <p>We are specialized in setting up the</p>
                        <p>foundation of your brand and</p>
                        <p>setting you up for success</p>
                    </motion.div>
                </div>
                <div className="DtsExpCvr">
                    <motion.div variants={exp} animate='animate'>
                        <ExpComp />
                    </motion.div>
                    <motion.div variants={exp_2} animate='animate' >
                        <ExpComp />
                    </motion.div>
                </div>
                <motion.div className="DtsBig DtsStudio" style={{paddingLeft: padLeft}}>
                    <EchText text='studio' />
                </motion.div>
            </motion.div>
            <motion.div className="scrollDown" variants={scrollDown_1} initial='initial' animate='animate' style={{x:rollX, rotate:rollRotate}}>
                <motion.div variants={scrollDown_2} initial='initial' animate='animate'>Scroll</motion.div>
                <motion.div variants={scrollDown_2} initial='initial' animate='animate'>Down</motion.div>
            </motion.div>

            {/*--start-- below is the initial loader of the page, these are the first images that appears when the page loads */}
            <motion.div className="ImgHdCvr FirstImage" variants={fImgCvr} initial='initial' animate='animate'>
                <motion.div variants={fChildren} initial='initial' animate='animate' custom={1} className="imgEch img1 gsap1"><img id='p1' src={p1} alt="" /></motion.div>
                <motion.div variants={fChildren} initial='initial' animate='animate' custom={2} className="imgEch img2 gsap2"><img id='p2' src={p2} alt="" /></motion.div>
                <motion.div variants={fChildren} initial='initial' animate='animate' custom={4} className="imgEch img3 gsap3"><img id='p4' src={p4} alt="" /></motion.div>
                <motion.div variants={fChildren} initial='initial' animate='animate' custom={3} className="imgEch img4 gsap4"><img id='p3' src={p3} alt="" /></motion.div>
                <motion.div variants={fChildren} initial='initial' animate='animate' custom={5} className="imgEch img5 gsap5"><img id='p5' src={p5} alt="" /></motion.div>
            </motion.div>
            {/*--end--*/}

            <div className="">
                <img src="" alt="" />
            </div>

            <div className="ImgHdCvr">
                <div className="imgEch img1"><img src={p1} alt="" /></div>
                <div className="imgEch img2"><img src={p2} alt="" /></div>
                <div className="imgEch img3"><img src={p4} alt="" /></div>
                <div className="imgEch img4"><img src={p3} alt="" /></div>
                <div className="imgEch img5"><img src={p5} alt="" /></div>
            </div>
        </div>
    )
}
export default App;