import type React from "react";
export type ScrollRevealProps = {
    children?: React.ReactNode;
    scrollContainerRef?: React.RefObject<any>;
    enableBlur?: boolean;
    baseOpacity?: number;
    baseRotation?: number;
    blurStrength?: number;
    containerClassName?: string;
    textClassName?: string;
    rotationEnd?: string;
    wordAnimationEnd?: string;
};
export declare const ScrollReveal: React.FC<ScrollRevealProps>;
export default ScrollReveal;
