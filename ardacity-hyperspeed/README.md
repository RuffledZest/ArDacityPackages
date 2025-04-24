# ArDacity Hyperspeed

A React component that creates stunning 3D hyperspeed tunnel effects based on WebGL shaders, providing an immersive driving through space visual.

## Installation

```bash
npm install @ar-dacity/ardacity-hyperspeed
```

or

```bash
yarn add @ar-dacity/ardacity-hyperspeed
```

This package requires Three.js and postprocessing as peer dependencies. If you haven't already installed them, run:

```bash
npm install three postprocessing
```

## What Happens During Installation

When you install this package, it automatically:

1. Creates a `components/ArDacityUi` directory in your project (if it doesn't exist)
2. Creates a `Hyperspeed` subdirectory
3. Copies the Hyperspeed component files into that directory:
   - `Hyperspeed.jsx`
   - `presets.js`
   - `index.js`

## Usage

After installation, you can import the component directly from your components directory:

```jsx
import { Hyperspeed, hyperspeedPresets } from './components/ArDacityUi/Hyperspeed';

function App() {
  return (
    <div style={{ width: "100%", height: "500px" }}>
      <Hyperspeed effectOptions={hyperspeedPresets.Cyberpunk} />
    </div>
  );
}
```

The component will fill the height and width of its parent container, so make sure to set appropriate dimensions on the parent element.

## Presets

The package comes with several built-in presets to quickly get started:

- `Cyberpunk` - Neon purple and teal tunnel effect
- `Akira` - Red and blue racing style
- `Golden` - Gold and red elegant look
- `Split` - Split road with contrasting colors
- `Highway` - Multi-lane highway with red and cream lights

You can import and use these presets directly:

```jsx
import { Hyperspeed, hyperspeedPresets } from './components/ArDacityUi/Hyperspeed';

<Hyperspeed effectOptions={hyperspeedPresets.Akira} />
```

## Component Props

The component accepts a highly customizable `effectOptions` object:

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| **distortion** | string | 'turbulentDistortion' | Distortion effect for the road ('turbulentDistortion', 'mountainDistortion', 'xyDistortion', 'LongRaceDistortion', 'deepDistortion') |
| **length** | number | 400 | Length of the road |
| **roadWidth** | number | 10 | Width of each road segment |
| **islandWidth** | number | 2 | Width of the divider between roads |
| **lanesPerRoad** | number | 4 | Number of lanes per road |
| **fov** | number | 90 | Camera field of view |
| **fovSpeedUp** | number | 150 | Field of view when speeding up |
| **speedUp** | number | 2 | Speed multiplier when accelerating |
| **carLightsFade** | number | 0.4 | Fade factor for car lights |
| **totalSideLightSticks** | number | 20 | Number of light sticks on the side |
| **lightPairsPerRoadWay** | number | 40 | Number of light pairs per road |
| **shoulderLinesWidthPercentage** | number | 0.05 | Width of shoulder lines as percentage |
| **brokenLinesWidthPercentage** | number | 0.1 | Width of broken lines as percentage |
| **brokenLinesLengthPercentage** | number | 0.5 | Length of broken lines as percentage |
| **onSpeedUp** | function | () => {} | Callback when user presses/holds mouse button |
| **onSlowDown** | function | () => {} | Callback when user releases mouse button |

Plus many more detailed customization options for car lights, colors, etc. See the source code for all options.

## Interaction

- **Mouse Down/Touch**: Speed up the hyperspeed effect
- **Mouse Up/Touch End**: Return to normal speed

## Custom Configuration

You can create your own configuration by customizing the effectOptions:

```jsx
<Hyperspeed
  effectOptions={{
    distortion: 'deepDistortion',
    length: 400,
    roadWidth: 12,
    lanesPerRoad: 3,
    colors: {
      roadColor: 0x080808,
      islandColor: 0x0a0a0a,
      background: 0x000000,
      leftCars: [0xFF5511, 0xDD3300, 0xCC2200],
      rightCars: [0x0033FF, 0x0022DD, 0x0011CC],
      sticks: 0x00AAFF,
    }
  }}
/>
```

## Performance Considerations

The hyperspeed effect uses advanced WebGL rendering which may impact performance on lower-end devices. If you experience performance issues:

- Reduce the `lightPairsPerRoadWay` and `totalSideLightSticks` values
- Use simpler distortion types like 'xyDistortion'
- Ensure the component is not rendering on too many pages simultaneously

## License

MIT 