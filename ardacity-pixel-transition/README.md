# ArDacity Pixel Transition

A React component that provides pixelated transition effects for toggling between content on hover or click.

## Installation

```bash
npm install @ar-dacity/ardacity-pixel-transition
```

or

```bash
yarn add @ar-dacity/ardacity-pixel-transition
```

This package requires GSAP as a peer dependency. If you haven't already installed it, run:

```bash
npm install gsap
```

## What Happens During Installation

When you install this package, it automatically:

1. Creates a `components/ArDacityUi` directory in your project (if it doesn't exist)
2. Creates a `PixelTransition` subdirectory
3. Copies the PixelTransition component files into that directory:
   - `PixelTransition.jsx`
   - `index.js`

## Usage

After installation, you can import the component directly from your components directory:

```jsx
import PixelTransition from './components/ArDacityUi/PixelTransition/PixelTransition';
// Or simply:
import { PixelTransition } from './components/ArDacityUi/PixelTransition';

function App() {
  return (
    <PixelTransition
      firstContent={
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Cat03.jpg/1200px-Cat03.jpg"
          alt="default pixel transition content, a cat!"
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      }
      secondContent={
        <div
          style={{
            width: "100%",
            height: "100%",
            display: "grid",
            placeItems: "center",
            backgroundColor: "#111"
          }}
        >
          <p style={{ fontWeight: 900, fontSize: "3rem", color: "#ffffff" }}>Meow!</p>
        </div>
      }
      gridSize={12}
      pixelColor='#ffffff'
      animationStepDuration={0.4}
      className="custom-pixel-card"
    />
  );
}
```

## Component Props

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| firstContent | ReactNode \| string | — | Content to show by default (e.g., an `<img>` or text). |
| secondContent | ReactNode \| string | — | Content revealed upon hover or click. |
| gridSize | number | 7 | Number of rows/columns in the pixel grid. |
| pixelColor | string | currentColor | Background color used for each pixel block. |
| animationStepDuration | number | 0.3 | Length of the pixel reveal/hide in seconds. |
| aspectRatio | string | "100%" | Sets the 'padding-top' (or aspect-ratio) for the container. |
| className | string | — | Optional additional class names for styling. |
| style | object | {} | Optional inline styles for the container. |

## Customization

You can customize the transition effects using the props:

- **Grid Size**: Adjust the number of pixels with `gridSize={8}` (higher values = more, smaller pixels).
- **Pixel Color**: Change the pixel color with `pixelColor="#ffffff"`.
- **Animation Duration**: Control the animation speed with `animationStepDuration={0.4}` (in seconds).
- **Aspect Ratio**: Set the container's aspect ratio with `aspectRatio="56.25%"` (for 16:9).

## Interaction Behavior

- On desktop devices: The transition is triggered on hover (mouse enter/leave).
- On touch devices: The transition is triggered on tap/click.

## License

MIT 