import type React from "react";
export type AuroraProps = {
    /**
     * Array of color stops for the gradient
     * @default ["#00d8ff", "#7cff67", "#00d8ff"]
     */
    colorStops?: string[];
    /**
     * Controls the amplitude of the aurora effect
     * @default 1.0
     */
    amplitude?: number;
    /**
     * Controls the blend factor of the aurora effect
     * @default 0.5
     */
    blend?: number;
    /**
     * Controls the animation speed
     * @default 1.0
     */
    speed?: number;
};
export declare const Aurora: React.FC<AuroraProps>;
export default Aurora;
