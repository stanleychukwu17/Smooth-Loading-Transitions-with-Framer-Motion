import { motion } from "framer-motion"

type EsEchImgProps = {
    img: string,
    scale ?: number,
    zIndex ?: number,
}
export default function EsEchImg({img, scale, zIndex}: EsEchImgProps) {
    return (
        <motion.div className="Houses_EchOne" style={{scale: scale || 0.8}}>
            <img src={img} alt="" />
        </motion.div>
    )
}