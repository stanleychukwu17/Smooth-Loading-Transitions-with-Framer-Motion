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
    animate: (custom) => ({
        y: '0',
        opacity: 1,
        transition: {
            duration: .4,
            delay: 4.7 * custom
        }
    })
}


export const echTxtVar_1: general = {
    initial: {
        y: '180px',
    },
    animate: (custom) => ({
        y: 0,
        transition: {
            duration: .4,
            delay: 0.15 * custom,
        }
    }),
}
export const exp : general = {
    animate: (custom) => ({
        x: [ '0vw', '-100vw', '100vw', '0vw'],
        transition: {
            x: {
                times: [0, 0.5, 0.5, 1],
                ease: ['linear', 'linear', 'linear', 'linear'],
                duration: 8,
                repeat: Infinity,
                repeatType: 'loop',
            },
            delay: 6
        }
    })
}
export const exp_2 : general = {
    initial: {},
    animate: (custom) => ({
        color: '#000',
        x: ['-20vw', '-200vw', '-20vw'],
        transition: {
            x: {
                times: [0, 1, 1],
                ease: ['linear', 'linear', 'linear'],
                duration: 8,
                repeat: Infinity,
                repeatType: 'loop'
            },
            delay: 6.5
        }
    })
}

export const scrollDown_1: general = {
    initial: {
        scale: 0
    },
    animate: {
        scale: 1,
        transition: {
            duration: .7,
            type: 'spring',
            stiffness: 700,
            bounce: 50,
            delay: 4.7
        }
    }
}
export const scrollDown_2: general = {
    initial: {
        opacity: 0
    },
    animate: {
        opacity: 1,
        transition: {
            duration: .5,
            ease: 'easeInOut',
            delay: 5.5
        }
    }
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