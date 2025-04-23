# ArDacity Text Pressure

A React component library that adds dynamic pressure effects to text using variable fonts.

## Installation

\`\`\`bash
npm install @ar-dacity/ardacity-text-pressure
\`\`\`

or

\`\`\`bash
yarn add @ar-dacity/ardacity-text-pressure
\`\`\`

## What Happens During Installation

When you install this package, it automatically:

1. Creates a `components/ArDacityUi` directory in your project (if it doesn't exist)
2. Copies the TextPressure component files into that directory:
   - `TextPressure.jsx`
   - `index.js`

## Usage

After installation, you can import the component directly from your components directory:

\`\`\`jsx
import TextPressure from './components/ArDacityUi/TextPressure';

function App() {
  return (
    <div style={{position: 'relative', height: '300px'}}>
      <TextPressure
        text="Ardacity!"
        flex={true}
        alpha={false}
        stroke={false}
        width={true}
        weight={true}
        italic={true}
        textColor="#ffffff"
        strokeColor="#ff0000"
        minFontSize={36}
      />
    </div>
  );
}
\`\`\`

## Component Props

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| text | string | "ardacity" | Text content that will be displayed and animated. |
| fontFamily | string | "ardacity VF" | Name of the variable font family. |
| fontUrl | string | (ardacity font URL) | URL for the variable font file (needed) |
| flex | boolean | true | Whether the characters are spaced using flex layout. |
| scale | boolean | false | If true, vertically scales the text to fill its container height. |
| alpha | boolean | false | If true, applies an opacity effect based on cursor distance. |
| stroke | boolean | false | If true, adds a stroke effect around characters. |
| width | boolean | true | If true, varies the variable-font "width" axis. |
| weight | boolean | true | If true, varies the variable-font "weight" axis. |
| italic | boolean | true | If true, varies the variable-font "italics" axis. |
| textColor | string | auto | The fill color of the text. Automatically adapts to light/dark themes when not specified. |
| strokeColor | string | "#FF0000" | The stroke color that will be applied to the text when "stroke" is set to true |
| strokeWidth | number | 2 | The width of the stroke in pixels |
| className | string | "" | Additional class for styling the `<h1>` wrapper. |
| minFontSize | number | 24 | Sets a minimum font-size to avoid overly tiny text on smaller screens. |

## Important Notes

- Make sure the font you're using supports all the variable properties you enable.
- The component works best with variable fonts that support width, weight, and italic axes.
- For best results, place the TextPressure component in a container with a defined height.
- The default font is provided as an example and should not be used in commercial projects.
- If no textColor is specified, the component will automatically detect the theme and use black text on light backgrounds and white text on dark backgrounds.

## Example: Customizing the Font

\`\`\`jsx
<TextPressure
  text="Custom Font"
  fontFamily="My Variable Font"
  fontUrl="https://example.com/path/to/my-variable-font.woff2"
  width={true}
  weight={true}
  italic={false}
  textColor="#000000"
/>
\`\`\`

## Example: Minimal Usage

You can also use the component with minimal configuration:

\`\`\`jsx
<TextPressure/>
\`\`\`

This will render the component with all default settings and automatic text color based on theme.

## Compatibility

This package is compatible with:
- React 16.8.0 and above (requires Hooks)
- React with JSX
- Vite projects
- Next.js projects
- Create React App projects

## License

MIT
