import type React from "react"

// This file is just for TypeScript definitions and package exports
// The actual component will be copied to the user's project

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
}

// This is just a type definition, the actual component
// will be copied to the user's project during installation
export const ScrollReveal: React.FC<ScrollRevealProps> = () => null
export default ScrollReveal 