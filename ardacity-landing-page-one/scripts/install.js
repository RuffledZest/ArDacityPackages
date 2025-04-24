#!/usr/bin/env node

const fs = require("fs")
const path = require("path")

// Get the project root directory (where the user is installing the package)
const projectRoot = path.resolve(__dirname, "..", "..", "..", "..", "src")

// Define the target directory for components
const targetDir = path.join(projectRoot, "components", "ArDacityUi")

// Component-specific folder
const componentFolder = "LandingPageOne"
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

// Create the arweaveUtils.js file if it doesn't exist
function createArweaveUtils() {
  const utilsPath = path.join(projectRoot, "components", "arweaveUtils.js")
  
  if (!fs.existsSync(utilsPath)) {
    try {
      const content = `// arweaveUtils.js
const AOModule = "Do_Uc2Sju_ffp6Ev0AnLVdPtot15rvMjP-a9VVaA5fM"; // aos 2.0.1
const AOScheduler = "_GQ33BkPtZrqxA84vM8Zk-N2aO0toNNu_C-l-rawrBA";
const CommonTags = [
  { name: "Name", value: "Anon" },
  { name: "Version", value: "0.2.1" },
];

import {
  dryrun
} from "@permaweb/aoconnect"

// connect wallet
export async function connectWallet() {
  try {
    if (!window.arweaveWallet) {
      alert('No Arconnect detected');
      return;
    }
    await window.arweaveWallet.connect(
      ['ACCESS_ADDRESS', 'SIGN_TRANSACTION', 'ACCESS_TOKENS'],
      {
        name: 'ArDacity',
        logo: 'https://arweave.net/jAvd7Z1CBd8gVF2D6ESj7SMCCUYxDX_z3vpp5aHdaYk',
      },
      {
        host: 'g8way.io',
        port: 443,
        protocol: 'https',
      }
    );
  } catch (error) {
    console.error(error);
  } finally {
    console.log('connection finished execution');
  }
};

// disconnect wallet
export async function disconnectWallet() {
  return await window.arweaveWallet.disconnect();
};

// get wallet details
export async function getWalletAddress() {
  const walletAddress = await window.arweaveWallet.getActiveAddress();
  console.log(walletAddress)
  return walletAddress;
};

// fetch data from the processId
export async function dryrunResult(processId, tags) {
  const res = await dryrun({
    process: processId,
    tags,
  }).then((res) => JSON.parse(res.Messages[0].Data))
  return res
}`;
      
      fs.writeFileSync(utilsPath, content);
      console.log(`Created utilities file: ${utilsPath}`);
    } catch (error) {
      console.error(`Error creating arweaveUtils.js:`, error)
    }
  }
}

// Main installation function
function installComponents() {
  console.log("Installing ArDacity Landing Page One components...")

  try {
    // Ensure the target directories exist
    ensureDirectoryExists(path.join(projectRoot, "components"))
    ensureDirectoryExists(targetDir)
    ensureDirectoryExists(componentDir)

    // Create arweaveUtils.js file if needed
    createArweaveUtils()

    // Copy all component templates to the component-specific folder
    copyTemplate("LandingPageOne.jsx", "LandingPageOne.jsx")
    copyTemplate("index.js", "index.js")

    console.log("\nArDacity Landing Page One has been successfully installed!")
    console.log("You can now import it from your components directory:")
    console.log("import LandingPageOne from './components/ArDacityUi/LandingPageOne/LandingPageOne';")
    console.log("// Or simply:")
    console.log("import { LandingPageOne } from './components/ArDacityUi/LandingPageOne';")
    console.log("\nExample usage:")
    console.log(`
import { LandingPageOne } from './components/ArDacityUi/LandingPageOne';

function App() {
  return <LandingPageOne />;
}
    `)
    
    console.log("\nNOTE: This component requires the following ArDacity packages. Make sure they are installed:")
    console.log("npm install @ar-dacity/ardacity-text-pressure @ar-dacity/ardacity-scroll-reveal @ar-dacity/ardacity-pixel-transition @ar-dacity/ardacity-splash-cursor @ar-dacity/ardacity-hyperspeed @ar-dacity/ardacity-aurora @permaweb/aoconnect")
  } catch (error) {
    console.error("Error installing components:", error)
  }
}

// Run the installation
installComponents() 