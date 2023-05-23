import { Variant } from "framer-motion";

type general = {
    initial?: Variant;
    animate?: Variant;
}

export const fImgCvr: general = {
    initial: {
        y: '-95vh'
    }
}

export const fChildren: general = {
    initial: (custom) => ({
        opacity: 0,
        y: 50,
    }),
    animate: (custom) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: 0.2 * custom,
            duration: 1,
            ease: 'easeOut'
        }
    }),
}