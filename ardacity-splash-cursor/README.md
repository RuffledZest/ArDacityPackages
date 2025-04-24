# ArDacity Splash Cursor

A React component that creates beautiful fluid simulation cursor effects that follow the user's pointer movements, creating a splash-like visual effect. Based on WebGL shaders for high-performance animations.

## Installation

```bash
npm install @ar-dacity/ardacity-splash-cursor
```

or

```bash
yarn add @ar-dacity/ardacity-splash-cursor
```

## What Happens During Installation

When you install this package, it automatically:

1. Detects your project structure
2. Copies the SplashCursor component file into your components directory
3. Adapts to React or Next.js projects
4. Supports TypeScript by using the appropriate file extension (.tsx)

## Usage

After installation, you can import the component directly from your components directory:

```jsx
import SplashCursor from './components/SplashCursor';

function App() {
  return (
    <div>
      <h1>My Awesome Website</h1>
      {/* Add the SplashCursor component to enable the effect */}
      <SplashCursor />
    </div>
  );
}
```

## Component Props

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| SIM_RESOLUTION | number | 128 | Simulation resolution for the fluid dynamics. Higher values increase quality but reduce performance. |
| DYE_RESOLUTION | number | 1440 | Resolution of the color/dye field. Higher values create more detailed color effects. |
| DENSITY_DISSIPATION | number | 3.5 | How quickly the color dissipates. Lower values make colors last longer. |
| VELOCITY_DISSIPATION | number | 2 | How quickly the motion dissipates. Lower values create longer-lasting movement. |
| PRESSURE | number | 0.1 | Fluid pressure parameter that affects how the simulation behaves. |
| PRESSURE_ITERATIONS | number | 20 | More iterations create more accurate fluid simulation at the cost of performance. |
| CURL | number | 3 | Controls the amount of vorticity/swirl in the fluid. |
| SPLAT_RADIUS | number | 0.2 | Size of the splash effect when cursor moves. |
| SPLAT_FORCE | number | 6000 | Strength of the force applied to the fluid when cursor moves. |
| SHADING | boolean | true | Enables 3D-like shading effect on the fluid. |
| COLOR_UPDATE_SPEED | number | 10 | How quickly the colors change. |
| BACK_COLOR | object | { r: 0.5, g: 0, b: 0 } | The background/base color for the fluid effect (RGB values between 0-1). |
| TRANSPARENT | boolean | true | Whether the background should be transparent. |

## Customization Examples

You can customize the fluid simulation by adjusting the props:

```jsx
<SplashCursor 
  SPLAT_RADIUS={0.3}
  SPLAT_FORCE={8000}
  CURL={5}
  BACK_COLOR={{ r: 0, g: 0.3, b: 0.5 }}
/>
```

## Performance Considerations

For optimal performance:

- Lower the SIM_RESOLUTION and DYE_RESOLUTION on lower-end devices
- Disable SHADING if performance is an issue
- Consider reducing PRESSURE_ITERATIONS for better performance

## Browser Compatibility

The SplashCursor component is compatible with all modern browsers that support WebGL.

## License

MIT 