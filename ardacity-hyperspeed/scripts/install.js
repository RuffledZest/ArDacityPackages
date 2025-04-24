#!/usr/bin/env node

const fs = require("fs")
const path = require("path")

// Get the project root directory (where the user is installing the package)
const projectRoot = path.resolve(__dirname, "..", "..", "..", "..", "src")

// Define the target directory for components
const targetDir = path.join(projectRoot, "components", "ArDacityUi")

// Component-specific folder
const componentFolder = "Hyperspeed"
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
  console.log("Installing ArDacity Hyperspeed components...")

  try {
    // Ensure the target directories exist
    ensureDirectoryExists(path.join(projectRoot, "components"))
    ensureDirectoryExists(targetDir)
    ensureDirectoryExists(componentDir)

    // Copy all component templates to the component-specific folder
    copyTemplate("Hyperspeed.jsx", "Hyperspeed.jsx")
    copyTemplate("presets.js", "presets.js")
    copyTemplate("index.js", "index.js")

    console.log("\nArDacity Hyperspeed components have been successfully installed!")
    console.log("You can now import them from your components directory:")
    console.log("import Hyperspeed from './components/ArDacityUi/Hyperspeed/Hyperspeed';")
    console.log("// Or simply:")
    console.log("import { Hyperspeed, hyperspeedPresets } from './components/ArDacityUi/Hyperspeed';")
    console.log("\nExample usage:")
    console.log(`
import { Hyperspeed, hyperspeedPresets } from './components/ArDacityUi/Hyperspeed';

<Hyperspeed 
  effectOptions={hyperspeedPresets.Cyberpunk}
/>
    `)
    
    console.log("\nNOTE: This component requires three.js and postprocessing. If you haven't already installed them, run:")
    console.log("npm install three postprocessing")
  } catch (error) {
    console.error("Error installing components:", error)
  }
}

// Run the installation
installComponents() 