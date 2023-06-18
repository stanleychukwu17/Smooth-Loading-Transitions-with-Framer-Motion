import { motion, useMotionValueEvent, useScroll, useTransform } from "framer-motion"

type EsEchImgProps = {
    img: string,
    details: {
        scale1: number,
        scale2: number,
        opacity1: number,
        opacity2: number,
    }
}
export default function EsEchImg({img, details:dts}: EsEchImgProps) {
    const {scrollY} = useScroll()
    const scaleImg = useTransform(scrollY, [0, dts.scale1, dts.scale2], [1, 1, 0.8])
    const opacityImg = useTransform(scrollY, [0, dts.opacity1, dts.opacity2], [1, 1, 0])

    useMotionValueEvent(scrollY, 'change', latest => {
        console.log(latest)
    })
    return (
        <motion.div className="Houses_EchOne" style={{scale: scaleImg, opacity: opacityImg}}>
            <img src={img} alt="" />
        </motion.div>
    )
}
/**
scale = {
    scale1: 1300,
    scale2: 2000,
    opacity1: 2500,
    opacity2: 3000,
}

*/