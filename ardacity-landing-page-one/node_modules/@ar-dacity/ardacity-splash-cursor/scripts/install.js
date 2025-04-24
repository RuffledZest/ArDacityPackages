#!/usr/bin/env node

const fs = require("fs")
const path = require("path")

// Get the project root directory (where the user is installing the package)
const projectRoot = path.resolve(__dirname, "..", "..", "..", "..", "src")

// Define the target directory for components
const targetDir = path.join(projectRoot, "components", "ArDacityUi")

// Component-specific folder
const componentFolder = "SplashCursor"
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
  console.log("Installing ArDacity Splash Cursor components...")

  try {
    // Ensure the target directories exist
    ensureDirectoryExists(path.join(projectRoot, "components"))
    ensureDirectoryExists(targetDir)
    ensureDirectoryExists(componentDir)

    // Copy all component templates to the component-specific folder
    copyTemplate("SplashCursor.jsx", "SplashCursor.jsx")
    copyTemplate("index.js", "index.js")

    console.log("\nArDacity Splash Cursor components have been successfully installed!")
    console.log("You can now import them from your components directory:")
    console.log("import SplashCursor from './components/ArDacityUi/SplashCursor/SplashCursor';")
    console.log("// Or simply:")
    console.log("import { SplashCursor } from './components/ArDacityUi/SplashCursor';")
    console.log("\nExample usage:")
    console.log(`
import { SplashCursor } from './components/ArDacityUi/SplashCursor';

<SplashCursor 
  SPLAT_RADIUS={0.3}
  SPLAT_FORCE={8000}
  CURL={5}
  BACK_COLOR={{ r: 0, g: 0.3, b: 0.5 }}
/>
    `)
  } catch (error) {
    console.error("Error installing components:", error)
  }
}

// Run the installation
installComponents() 