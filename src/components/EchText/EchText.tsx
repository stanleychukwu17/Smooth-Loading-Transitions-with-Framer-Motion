import React, { useEffect } from 'react'
import { motion, useAnimationControls, useScroll, useTransform } from 'framer-motion'
import { echTxtVar_1 } from '../App/AppVariants'

type echProps = {
    text: string
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

    return (
        <motion.div className='innerCover'>
            {txtToShow.map( (i, num) => {
                return <OneByOne txt={i} num={num} key={num} />
            })}
        </motion.div>
    )
}