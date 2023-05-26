import { useScroll, useTransform, MotionValue, useMotionValue, useMotionValueEvent } from 'framer-motion';

type usePinProps = {
    itemToUpdate: MotionValue<number>,
    distanceFromTop: number,
    distanceToPin: number
} 
export const usePin = (props: usePinProps): MotionValue<number> => {
    const itemToUpdate = props.itemToUpdate
    const dTop = props.distanceFromTop
    const dGoTo = props.distanceToPin
    const {scrollY} = useScroll()
    let newYPos = useMotionValue(0)

    useTransform(scrollY, (currentScrollY) => { // inCharge of pining the phone down on user scroll
        if (currentScrollY > dTop && currentScrollY <= dGoTo) {
            newYPos.set(currentScrollY - dTop)
        } else if (currentScrollY > dGoTo) {
            newYPos.set(dGoTo - dTop)
        }
    })

    // this event below will automatically unsubscribe when the component is unmounted
    useMotionValueEvent(newYPos, 'change', (latest) => {
        itemToUpdate.set(latest)
    })

    return newYPos
}