
import React, { useState } from 'react'
import TextPressure from './components/ArDacityUi/TextPressure/TextPressure'
import ScrollReveal from './components/ArDacityUi/ScrollReveal/ScrollReveal'
import PixelTransition from './components/ArDacityUi/PixelTransition/PixelTransition'
import SplashCursor from './components/ArDacityUi/SplashCursor/SplashCursor'
import Hyperspeed from './components/ArDacityUi/Hyperspeed/Hyperspeed'
import { connectWallet, disconnectWallet, getWalletAddress } from './components/arweaveUtils';
import Aurora from './components/ArDacityUi/Aurora/Aurora'







function App() {
   const [walletAddress, setWalletAddress] = useState('');
    // const [isLoading, setIsLoading] = useState(true);
    const [isConnecting, setIsConnecting] = useState(false);
    
    const handleConnectWallet = async () => {
        setIsConnecting(true);
        try {
          await connectWallet();
          const address = await getWalletAddress();
          setWalletAddress(address);
        } catch (error) {
          console.error("Wallet connection error:", error);
        } finally {
          setIsConnecting(false);
        }
      };
    
      const handleDisconnectWallet = async () => {
        await disconnectWallet();
        setWalletAddress('');
      };
  return (
    //hide the scroll bar
    <div className='flex flex-col items-center justify-center   bg-black text-white  
     
      '>
      {/* navigation bar */}
      <nav className='flex items-center justify-between w-full  text-white p-4 sticky top-0 z-50 max-w-7xl mx-auto
      bg-transparent backdrop-blur-md shadow-lg'>
       
        <div className='text-2xl font-bold'>ArDacity UI</div>
        <div className='flex space-x-4'>
          <a href='#' className='hover:text-gray-400'>Home</a>
          <a href='#' className='hover:text-gray-400'>About</a>
          <a href='#' className='hover:text-gray-400'>Contact</a>
        </div>
        <div className='flex space-x-4'>
        {walletAddress ? (
          <div className="flex items-center space-x-4">
            <span className="text-sm">{walletAddress.substring(0, 6)}...{walletAddress.substring(walletAddress.length - 4)}</span>
            <button
              onClick={handleDisconnectWallet}
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
            >
              Disconnect
            </button>
          </div>
        ) : (
          <button
            onClick={handleConnectWallet}
            disabled={isConnecting}
            className="bg-white hover:bg-black text-black hover:text-white hover:border-white rounded-b-lg py-2 px-4 rounded"
          >
            {isConnecting ? 'Connecting...' : 'Connect Wallet'}
          </button>
        )}
        </div>
      </nav>
      {/* main content */}
      <div className='h-screen w-full flex flex-col items-center justify-center '>

      <div className='items-center justify-center  w-full  bg-black text-white overflow-x-hidden my-2 max-w-6xl mx-auto z-40'>

        <TextPressure className='text-9xl ' 
        />      
  </div>
  <div className=''>
            
            <h2 className='text-xl font-light text-center text-[#ffffff]/60'>A collection of UI components for Arweave Ecosystem</h2>
            <h2 className='text-xl font-light text-center text-[#ffffff]/60'>Making Frontend and Handlers easy for you</h2>
          </div>
      </div>

      <div className='max-w-6xl mx-auto'>

  <ScrollReveal
        baseOpacity={0}
        enableBlur={true}
        baseRotation={5}
        blurStrength={10}
        className="text-center text-2xl font-bold text-white max-w-4xl mx-auto p-4"
        
      >
        ArDacity UI is a collection of UI components for Arweave Ecosystem. 
        It is designed to make frontend and arweave handlers easy for you. 
        The components are built with React and Tailwind CSS, and they are fully customizable. 
        You can use them in your own projects or contribute to the library.
        
      </ScrollReveal>
      </div>
  
        <div className='max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 mt-20 mb-[-30]' >

      <PixelTransition
      firstContent={
        <img
          src="https://images.unsplash.com/photo-1642132652806-8aa09801c2ab?q=80&w=2060&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
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
          <p className="text-center"
          style={{ fontWeight: 900, fontSize: "3rem", color: "#ffffff" }}>Making for AO, On AO</p>
        </div>
      }
      gridSize={12}
      pixelColor='#614df2'
      animationStepDuration={0.4}
      className="custom-pixel-card"
    />
    <PixelTransition
      firstContent={
        <img
          src="https://images.unsplash.com/photo-1642132652806-8aa09801c2ab?q=80&w=2060&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
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
          <p className="text-center"
          style={{ fontWeight: 900, fontSize: "3rem", color: "#ffffff" }}>Making for AO, On AO</p>
        </div>

      }
      gridSize={12}
      pixelColor='#614df2'
      animationStepDuration={0.4}
      className="custom-pixel-card"
    />
    <PixelTransition
      firstContent={
        <img
          src="https://images.unsplash.com/photo-1642132652806-8aa09801c2ab?q=80&w=2060&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
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
          <p className="text-center"
          style={{ fontWeight: 900, fontSize: "3rem", color: "#ffffff" }}>Making for AO, On AO</p>
        </div>

      }
      gridSize={12}
      pixelColor='#614df2'
      animationStepDuration={0.4}
      className="custom-pixel-card"
    />
    <PixelTransition
      firstContent={
        <img
          src="https://images.unsplash.com/photo-1642132652806-8aa09801c2ab?q=80&w=2060&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
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
          <p className="text-center"
          style={{ fontWeight: 900, fontSize: "3rem", color: "#ffffff" }}>Making for AO, On AO</p>
        </div>

      }
      gridSize={12}
      pixelColor='#614df2'
      animationStepDuration={0.4}
      className="custom-pixel-card"
    />

    
        
        

    
    <div>
     
      <SplashCursor></SplashCursor>
    </div>
</div>
    <div style={{ width: "100%", height: "350px" }}
    className='overflow-hidden mx-auto'>
      <Hyperspeed />


    </div>
     <div style={{ width: '100%', height: '300px' }}>
      <Aurora
        colorStops={["#3A29FF", "#FF94B4", "#FF3232"]}
        blend={0.5}
        amplitude={1.0}
        speed={0.5}
      />
    </div>

</div>
  )
}

export default App