import { useScroll, useTransform, MotionValue, useMotionValue, useMotionValueEvent } from 'framer-motion';
import { gsap } from 'gsap';

type usePinProps = {
    itemToUpdate: MotionValue<number>,
    distanceFromTop: number,
    distanceToPin: number,
    itemToBeFixed: string,
} 
export const usePin = (props: usePinProps): MotionValue<number> => {
    const itemToUpdate = props.itemToUpdate
    const dTop = props.distanceFromTop
    const dGoTo = props.distanceToPin
    const itemToBeFixed = props.itemToBeFixed
    const {scrollY} = useScroll()
    let newYPos = useMotionValue(0)
    let currentNumber = 0;

    useTransform(scrollY, (currentScrollY) => { // inCharge of pining the phone down on user scroll
        currentNumber = 0
        if (currentScrollY > dTop && currentScrollY <= dGoTo) {
            gsap.set(itemToBeFixed, {position: 'fixed'})
            currentNumber = 0 - dTop;
        } else if (currentScrollY > dGoTo) {
            gsap.set(itemToBeFixed, {position: 'relative'})
            currentNumber = dGoTo - dTop
        } else {
            currentNumber = 0
            gsap.set(itemToBeFixed, {position: 'relative'})
        }

        // console.log({currentScrollY, dGoTo, 'ePass':currentScrollY > dGoTo, currentNumber})
        newYPos.set(currentNumber)
    })

    // this event below will automatically unsubscribe when the component is unmounted
    useMotionValueEvent(newYPos, 'change', (latest) => {
        itemToUpdate.set(currentNumber)
    })

    return newYPos
}