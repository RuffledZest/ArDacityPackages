# ArDacity Scroll Reveal

A React component that provides smooth scroll-triggered animations with blur, opacity, and rotation effects.

## Installation

```bash
npm install @ar-dacity/ardacity-scroll-reveal
```

or

```bash
yarn add @ar-dacity/ardacity-scroll-reveal
```

This package requires GSAP as a peer dependency. If you haven't already installed it, run:

```bash
npm install gsap
```

## Usage

```jsx
import ScrollReveal from './components/ArDacityUi/ScrollReveal';

function App() {
  return (
    <div>
      <ScrollReveal
        baseOpacity={0}
        enableBlur={true}
        baseRotation={5}
        blurStrength={10}
      >
        When does a man die? When he is hit by a bullet? No! When he suffers a disease?
        No! When he ate a soup made out of a poisonous mushroom?
        No! A man dies when he is forgotten!
      </ScrollReveal>
    </div>
  );
}
```

## Component Props

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| children | ReactNode | — | The text or elements to be animated. If a string is provided, it will be split into words. |
| scrollContainerRef | React.RefObject | window | Optional ref for the scroll container. If provided, GSAP will use this container for scroll triggers; otherwise, it defaults to the window. |
| enableBlur | boolean | true | Enables the blur animation effect on the words. |
| baseOpacity | number | 0.1 | The initial opacity value for the words before the animation. |
| baseRotation | number | 3 | The starting rotation (in degrees) for the container before it animates to 0. |
| blurStrength | number | 4 | The strength of the blur effect (in pixels) applied at the start of the animation. |
| containerClassName | string | "" | Additional CSS class(es) to apply to the container element. |
| textClassName | string | "" | Additional CSS class(es) to apply to the text element. |
| rotationEnd | string | "bottom bottom" | The scroll trigger end point for the container rotation animation. |
| wordAnimationEnd | string | "bottom bottom" | The scroll trigger end point for the word opacity and blur animations. The animation will complete when the bottom of the text reaches the bottom of the container. |

## Customization

You can customize the animation effects using the props:

- **Enable Blur**: Set `enableBlur={true|false}` to toggle the blur effect.
- **Blur Strength**: Adjust the intensity of the blur effect with `blurStrength={4}` (higher values = stronger blur).
- **Starting Opacity**: Control how transparent the text starts with `baseOpacity={0.1}` (0 = invisible, 1 = fully visible).
- **Starting Rotation**: Set the initial rotation angle with `baseRotation={3}` (in degrees).

## License

MIT 