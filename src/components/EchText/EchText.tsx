import React from 'react'
import { motion } from 'framer-motion'

type echProps = {
    text: string
}

const OneByOne = ({txt}: {txt: string}) => {
    return (
        <motion.span className="">{txt}</motion.span>
    )
}

export default function EchText(props: echProps) {
    const txtToShow = props.text.split('')

    // console.log(props.text, txtToShow)
    return (
        <div>
            {txtToShow.map( i => {
                return <OneByOne txt={i} />
            })}
        </div>
    )
}