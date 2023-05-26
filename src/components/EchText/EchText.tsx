import React, { useEffect } from 'react'
import { motion, useAnimationControls, useScroll, useTransform } from 'framer-motion'
import { echTxtVar_1 } from '../App/AppVariants'

type echProps = {
    text: string,
    allowBackground: boolean
}

const OneByOne = ({txt, num}: {txt: string, num: number}) => {
    const controls = useAnimationControls()
    const {scrollY} = useScroll()
    const fSize = useTransform(scrollY, [0 , 700], ['180px', '175px'])

    
    useEffect(() => {
        setTimeout(() => {
            controls.start('animate')
        }, 4300)
    }, [controls])

    return (
        <motion.div variants={echTxtVar_1} custom={num} initial='initial' animate={controls} className='DtsText' style={{fontSize: fSize}}>
            {txt}
        </motion.div>
    )
}

export default function EchText(props: echProps) {
    const txtToShow = props.text.split('')
    const allowBackground = props.allowBackground
    const {scrollY} = useScroll()
    const scX = useTransform(scrollY, [0 , 1300], [0, 1])

    return (
        <div className="dtsInner1">
            <motion.div className='innerA'>
                {txtToShow.map( (i, num) => {
                    return <OneByOne txt={i} num={num} key={num} />
                })}
            </motion.div>
            {allowBackground && (
                <motion.div className="innerB" style={{scaleX: scX, originX: 'left'}}></motion.div>
            )}
        </div>
    )
}