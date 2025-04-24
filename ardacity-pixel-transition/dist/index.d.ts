import type React from "react";
export type PixelTransitionProps = {
    firstContent?: React.ReactNode | string;
    secondContent?: React.ReactNode | string;
    gridSize?: number;
    pixelColor?: string;
    animationStepDuration?: number;
    className?: string;
    style?: React.CSSProperties;
    aspectRatio?: string;
};
export declare const PixelTransition: React.FC<PixelTransitionProps>;
export default PixelTransition;
