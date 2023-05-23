import React, { useEffect } from 'react'
import { motion, useAnimationControls } from 'framer-motion'
import { echTxtVar_1 } from '../App/AppVariants'

type echProps = {
    text: string
}

const OneByOne = ({txt, num}: {txt: string, num: number}) => {
    const controls = useAnimationControls()

    useEffect(() => {
        setTimeout(() => {
            controls.start('animate')
        }, 3900)
    }, [])

    return (
        <motion.div variants={echTxtVar_1} custom={num} initial='initial' animate={controls}>
            {txt}
        </motion.div>
    )
}

export default function EchText(props: echProps) {
    const txtToShow = props.text.split('')

    // console.log(props.text, txtToShow)
    return (
        <motion.div className='innerCover'>
            {txtToShow.map( (i, num) => {
                return <OneByOne txt={i} num={num} key={num} />
            })}
        </motion.div>
    )
}