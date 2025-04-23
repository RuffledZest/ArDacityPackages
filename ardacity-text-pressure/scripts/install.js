#!/usr/bin/env node

const fs = require("fs")
const path = require("path")

// Get the project root directory (where the user is installing the package)
//this is not working as it is still making the components folder in the node_modules folder i want it to be in the root of the project
// i still need to keep it out of node_modules folder


const projectRoot = path.resolve(__dirname, "..", "..", "..", "..", "src")
// const projectRoot = path.resolve(__dirname, "..", "..")


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
  console.log("Installing ArDacity Text Pressure components...")

  try {
    // Ensure the target directory exists
    ensureDirectoryExists(path.join(projectRoot, "components"))
    ensureDirectoryExists(targetDir)

    // Copy all component templates
    copyTemplate("TextPressure.jsx", "TextPressure.jsx")
    copyTemplate("index.js", "index.js")

    console.log("\nArDacity Text Pressure components have been successfully installed!")
    console.log("You can now import them from your components directory:")
    console.log("import TextPressure from './components/ArDacityUi/TextPressure';")
    console.log("\nExample usage:")
    console.log(`
<div style={{position: 'relative', height: '700px'}}>
  <TextPressure
    text="Ardacity!"
    flex={true}
    alpha={false}
    stroke={false}
    width={true}
    weight={true}
    italic={true}
    textColor="#000"
    strokeColor="#ff0000"
    minFontSize={36}
  />
</div>
    `)
  } catch (error) {
    console.error("Error installing components:", error)
  }
}

// Run the installation
installComponents()
