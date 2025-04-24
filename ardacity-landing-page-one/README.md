# ArDacity Landing Page One

A beautiful landing page component that showcases all ArDacity UI components together with Arweave wallet integration.

## Installation

```bash
npm install @ar-dacity/ardacity-landing-page-one
```

This package requires other ArDacity components. Install them as well:

```bash
npm install @ar-dacity/ardacity-text-pressure @ar-dacity/ardacity-scroll-reveal @ar-dacity/ardacity-pixel-transition @ar-dacity/ardacity-splash-cursor @ar-dacity/ardacity-hyperspeed @ar-dacity/ardacity-aurora @permaweb/aoconnect
```

## Features

- Responsive design
- Arweave wallet integration
- Showcases all ArDacity UI components:
  - TextPressure
  - ScrollReveal
  - PixelTransition
  - SplashCursor
  - Hyperspeed
  - Aurora

## Usage

After installation, the component will be automatically added to your project's components directory.

```jsx
import { LandingPageOne } from './components/ArDacityUi/LandingPageOne';

function App() {
  return <LandingPageOne />;
}
```

### Customization

You can customize various aspects of the landing page:

```jsx
<LandingPageOne
  title="My Awesome Project"
  subtitleLines={[
    "A revolutionary new project",
    "Built on Arweave"
  ]}
  description="This is my amazing project that uses all the ArDacity UI components to create a stunning user experience."
  auroraColorStops={["#FF5733", "#33FF57", "#3357FF"]}
  pixelTransitionImgUrl="https://example.com/my-image.jpg"
  pixelTransitionText="My Custom Text"
/>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `title` | `string` | `"ArDacity UI"` | Title displayed in the header |
| `subtitleLines` | `string[]` | `["A collection of UI components...", "Making Frontend..."]` | Array of subtitle lines displayed below the main title |
| `description` | `string` | `"ArDacity UI is a collection..."` | Main description text shown in the ScrollReveal section |
| `auroraColorStops` | `string[]` | `["#3A29FF", "#FF94B4", "#FF3232"]` | Color stops for the Aurora effect |
| `pixelTransitionImgUrl` | `string` | `"https://images.unsplash.com/..."` | URL for the image used in PixelTransition components |
| `pixelTransitionText` | `string` | `"Making for AO, On AO"` | Text displayed in the second state of PixelTransition components |

## Requirements

This component requires:
- React 16.8.0 or higher
- React DOM 16.8.0 or higher
- All ArDacity UI component packages
- @permaweb/aoconnect for Arweave integration

## License

MIT 