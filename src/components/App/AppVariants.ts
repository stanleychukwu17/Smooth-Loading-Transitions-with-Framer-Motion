import { Variant } from "framer-motion";

type general = {
    initial?: Variant;
    animate?: Variant;
}



export const headerVariant: general = {
    initial: {
        y: '-100px',
        opacity: 0
    },
    animate: {
        y: '0',
        opacity: 1,
        transition: {
            duration: .4,
            delay: 4.4
        }
    }
}

export const echTxtVar_1: general = {
    initial: {
        y: 50,
    },
    animate: {},
}

export const fImgCvr: general = {
    initial: {
        y: '-95vh',
        zIndex: 2,
    },
    animate: {
        y:'-10vh',
        zIndex: -1,
        transition: {
            delay: 4,
            duration: .8,
        }
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