# ArDacity Aurora

A beautiful WebGL-powered aurora effect component for React applications.

## Installation

```bash
npm install @ar-dacity/ardacity-aurora
```

## Usage

After installation, the component will be automatically added to your project's components directory.

```jsx
import { Aurora } from './components/ArDacityUi/Aurora';

function App() {
  return (
    <div style={{ width: '100%', height: '300px' }}>
      <Aurora
        colorStops={["#3A29FF", "#FF94B4", "#FF3232"]}
        blend={0.5}
        amplitude={1.0}
        speed={0.5}
      />
    </div>
  );
}
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `colorStops` | `string[]` | `["#00d8ff", "#7cff67", "#00d8ff"]` | Array of color stops for the gradient |
| `amplitude` | `number` | `1.0` | Controls the amplitude of the aurora effect |
| `blend` | `number` | `0.5` | Controls the blend factor of the aurora effect |
| `speed` | `number` | `1.0` | Controls the animation speed |

## Requirements

This component requires the [OGL library](https://github.com/oframe/ogl). It's listed as a peer dependency, so you'll need to install it in your project:

```bash
npm install ogl
```

## How It Works

The Aurora component creates a beautiful animated gradient effect similar to the aurora borealis. It uses WebGL for rendering and animation, providing an efficient and smooth experience.

The component:
- Uses WebGL shaders for the gradient and animation
- Responds to container size changes
- Has customizable colors, amplitude, and speed

## License

MIT 