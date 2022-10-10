import gsap, { Elastic, Power4 } from "gsap";

const MAGNET_STRENGTH = 25;
const MAGNET_STRENGTH_TEXT = 15;

export function magneticEffect(
    parentRef: HTMLElement,
    childRef: HTMLElement,
    clientX: number,
    clientY: number
) {
    const magnetButton = parentRef;
    const bounding = magnetButton.getBoundingClientRect();

    gsap.to(magnetButton, {
        duration: 1.5,
        x:
            ((clientX - bounding.left) / magnetButton.offsetWidth - 0.5) *
            MAGNET_STRENGTH,
        y:
            ((clientY - bounding.top) / magnetButton.offsetHeight - 0.5) *
            MAGNET_STRENGTH,
        rotate: "0.001deg",
        ease: Power4.easeOut,
    });

    gsap.to(childRef, {
        duration: 1.5,
        x:
            ((clientX - bounding.left) / magnetButton.offsetWidth - 0.5) *
            MAGNET_STRENGTH_TEXT,
        y:
            ((clientY - bounding.top) / magnetButton.offsetHeight - 0.5) *
            MAGNET_STRENGTH_TEXT,
        rotate: "0.001deg",
        ease: Power4.easeOut,
    });
}

export function resetMagneticEffect(parentRef: HTMLElement,
    childRef: HTMLElement) {
    const magnetButton = parentRef;

    gsap.to(magnetButton, {
        duration: 1.5,
        x: 0,
        y: 0,
        ease: Elastic.easeOut,
    });

    gsap.to(childRef, {
        duration: 1.5,
        x: 0,
        y: 0,
        ease: Elastic.easeOut,
    });
}