import { ReactNode } from "react";
export interface LandingPageOneProps {
    /**
     * Title displayed in the header
     * @default "ArDacity UI"
     */
    title?: string;
    /**
     * Array of subtitle lines displayed below the main title
     * @default ["A collection of UI components for Arweave Ecosystem", "Making Frontend and Handlers easy for you"]
     */
    subtitleLines?: string[];
    /**
     * Main description text shown in the ScrollReveal section
     * @default "ArDacity UI is a collection of UI components for Arweave Ecosystem..."
     */
    description?: string;
    /**
     * Color stops for the Aurora effect
     * @default ["#3A29FF", "#FF94B4", "#FF3232"]
     */
    auroraColorStops?: string[];
    /**
     * URL for the image used in PixelTransition components
     * @default "https://images.unsplash.com/photo-1642132652806-8aa09801c2ab..."
     */
    pixelTransitionImgUrl?: string;
    /**
     * Text displayed in the second state of PixelTransition components
     * @default "Making for AO, On AO"
     */
    pixelTransitionText?: string;
}
declare const LandingPageOne: (_props: LandingPageOneProps) => ReactNode;
export default LandingPageOne;
