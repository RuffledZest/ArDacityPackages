import type React from "react"

// This file is just for TypeScript definitions and package exports
// The actual component will be copied to the user's project

export type SplashCursorProps = {
  SIM_RESOLUTION?: number;
  DYE_RESOLUTION?: number;
  CAPTURE_RESOLUTION?: number;
  DENSITY_DISSIPATION?: number;
  VELOCITY_DISSIPATION?: number;
  PRESSURE?: number;
  PRESSURE_ITERATIONS?: number;
  CURL?: number;
  SPLAT_RADIUS?: number;
  SPLAT_FORCE?: number;
  SHADING?: boolean;
  COLOR_UPDATE_SPEED?: number;
  BACK_COLOR?: { r: number, g: number, b: number };
  TRANSPARENT?: boolean;
}

// This is just a type definition, the actual component
// will be copied to the user's project during installation
export const SplashCursor: React.FC<SplashCursorProps> = () => null
export default SplashCursor 