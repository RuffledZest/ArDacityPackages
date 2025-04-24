import type React from "react"

// This file is just for TypeScript definitions and package exports
// The actual component will be copied to the user's project

export type PixelTransitionProps = {
  firstContent?: React.ReactNode | string;
  secondContent?: React.ReactNode | string;
  gridSize?: number;
  pixelColor?: string;
  animationStepDuration?: number;
  className?: string;
  style?: React.CSSProperties;
  aspectRatio?: string;
}

// This is just a type definition, the actual component
// will be copied to the user's project during installation
export const PixelTransition: React.FC<PixelTransitionProps> = () => null
export default PixelTransition 