#!/usr/bin/env node

const fs = require("fs")
const path = require("path")

// Get the project root directory (where the user is installing the package)
const projectRoot = path.resolve(__dirname, "..", "..", "..", "..", "src")

// Define the target directory for components
const targetDir = path.join(projectRoot, "components", "ArDacityUi")

// Component-specific folder
const componentFolder = "PixelTransition"
const componentDir = path.join(targetDir, componentFolder)

// Define the source directory for component templates
const templateDir = path.join(__dirname, "..", "templates")

// Create directories if they don't exist
function ensureDirectoryExists(directory) {
  if (!fs.existsSync(directory)) {
    fs.mkdirSync(directory, { recursive: true })
    console.log(`Created directory: ${directory}`)
  }
}

// Copy a template file to the target directory
function copyTemplate(templateName, targetName) {
  const sourcePath = path.join(templateDir, templateName)
  const targetPath = path.join(componentDir, targetName)

  try {
    const content = fs.readFileSync(sourcePath, "utf8")
    fs.writeFileSync(targetPath, content)
    console.log(`Created component: ${targetPath}`)
  } catch (error) {
    console.error(`Error copying template ${templateName}:`, error)
  }
}

// Main installation function
function installComponents() {
  console.log("Installing ArDacity Pixel Transition components...")

  try {
    // Ensure the target directories exist
    ensureDirectoryExists(path.join(projectRoot, "components"))
    ensureDirectoryExists(targetDir)
    ensureDirectoryExists(componentDir)

    // Copy all component templates to the component-specific folder
    copyTemplate("PixelTransition.jsx", "PixelTransition.jsx")
    copyTemplate("index.js", "index.js")

    console.log("\nArDacity Pixel Transition components have been successfully installed!")
    console.log("You can now import them from your components directory:")
    console.log("import PixelTransition from './components/ArDacityUi/PixelTransition/PixelTransition';")
    console.log("// Or simply:")
    console.log("import { PixelTransition } from './components/ArDacityUi/PixelTransition';")
    console.log("\nExample usage:")
    console.log(`
import { PixelTransition } from './components/ArDacityUi/PixelTransition';

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
    `)
    
    console.log("\nNOTE: This component requires GSAP. If you haven't already installed it, run:")
    console.log("npm install gsap")
  } catch (error) {
    console.error("Error installing components:", error)
  }
}

// Run the installation
installComponents() 