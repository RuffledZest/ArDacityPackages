#!/usr/bin/env node

const fs = require("fs")
const path = require("path")

// Get the project root directory (where the user is installing the package)
const projectRoot = path.resolve(__dirname, "..", "..", "..", "..", "src")

// Define the target directory for components
const targetDir = path.join(projectRoot, "components", "ArDacityUi")

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
  const targetPath = path.join(targetDir, targetName)

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
  console.log("Installing ArDacity Scroll Reveal components...")

  try {
    // Ensure the target directory exists
    ensureDirectoryExists(path.join(projectRoot, "components"))
    ensureDirectoryExists(targetDir)

    // Copy all component templates
    copyTemplate("ScrollReveal.jsx", "ScrollReveal.jsx")
    copyTemplate("index.js", "index.js")

    console.log("\nArDacity Scroll Reveal components have been successfully installed!")
    console.log("You can now import them from your components directory:")
    console.log("import ScrollReveal from './components/ArDacityUi/ScrollReveal';")
    console.log("\nExample usage:")
    console.log(`
import ScrollReveal from './components/ArDacityUi/ScrollReveal';

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
    `)
    
    console.log("\nNOTE: This component requires GSAP. If you haven't already installed it, run:")
    console.log("npm install gsap")
  } catch (error) {
    console.error("Error installing components:", error)
  }
}

// Run the installation
installComponents() 