import type React from "react"

// This file is just for TypeScript definitions and package exports
// The actual component will be copied to the user's project

export type TextPressureProps = {
  text?: string
  fontFamily?: string
  fontUrl?: string
  width?: boolean
  weight?: boolean
  italic?: boolean
  alpha?: boolean
  flex?: boolean
  stroke?: boolean
  scale?: boolean
  textColor?: string
  strokeColor?: string
  strokeWidth?: number
  className?: string
  minFontSize?: number
}

// This is just a type definition, the actual component
// will be copied to the user's project during installation
export const TextPressure: React.FC<TextPressureProps> = () => null
export default TextPressure
